<template>
    <el-row style="height: 100%;">
        <!--用户列表-->
        <el-col :span="4" style="height: 100%;">
            <el-card style="height: 100%;" shadow="none">
                <el-col :span="24">
                    <el-menu default-active="3" style="border: none;" class="el-menu-vertical-demo"
                             @open="handleOpen" @close="handleClose"
                    >
                        <el-menu-item :index="index" v-for="(message,index) in data" @click="loadUserMsg(message)">
                            <el-avatar :size="40"
                                       src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
                            <span style="margin-left: 10px">{{ message.recipientsName == currentUser.userName ? "" : message.recipientsName }}</span>
                        </el-menu-item>

                    </el-menu>
                </el-col>
            </el-card>
        </el-col>

        <!--消息卡片-->
        <el-col :span="20" style="height: 100%;background: rgba(0,0,0,0.1);">
            <div style="height: 80%;display: block;overflow-y: scroll">
                <el-card>
                    <!--左边头像-->
                    <el-row v-for="(item,index) in messageList" :key="index" style="margin-top: 20px">
                        <el-col :span="2">
                            <div v-if="item.addresserId != currentUser.userId" style="position:relative;">
                                <div style="width: 50px;height: 50px;display: inline-block;">
                                    <el-avatar :size="40"
                                               src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
                                </div>
                                <div style="display: inline-block;position: relative;position: relative;bottom: 20px;">
                                    {{ item.recipientsName }}
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="18">
                            <div style="display: inline-block;padding: 5px;border-radius: 20px"
                                 :style=" item.addresserId !=currentUser.userId ? 'background:rgba(0,0,0,0.1);' : 'color: white;background:#337ecc;float:right'"
                            >
                                {{ item.content }}
                            </div>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="2">
                            <div v-if="item.addresserId == currentUser.userId">
                                <div
                                        style="display: inline-block;position: relative;position: relative;bottom: 20px;margin-right: 10px">
                                    {{ currentUser.userName }}
                                </div>
                                <div style="width: 50px;height: 50px;display: inline-block;">
                                    <el-avatar
                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
            <!--发送消息部分-->
            <el-card style="height: 20%;overflow-y: scroll;">
                <el-input type="textarea" v-model="sendMsg.content" autosize="70%" placeholder="快来开始对话吧..."/>
                <el-button type="primary" @click="sendMessage()" style="margin-top: 20px;float:right;">发送</el-button>
            </el-card>

        </el-col>
    </el-row>
</template>

<script>
import httpUtil from "@/http/httpUtil.js";
import {ElMessage} from 'element-plus'

export default {
    name: 'collection',
    data: function () {
        return {
            data: [],
            messageList: [],
            currentUser: {},
            sendMsg: {content: ""},
            recipientsId: "",
            pullMessageTrigger: null

        }
    },
    mounted() {
        this.load();
        this.initAndTrigger();
    },
    methods: {
        load: function () {
            this.currentUser = {"userId": localStorage.getItem("userId"), "userName": localStorage.getItem("userName")};
            httpUtil.getData("online/getAllActiveOnLine").then(res => {
                if (res.code == 200) {
                    this.data = res.data;
                    if (res.data.length > 0) {
                        this.messageList = res.data[0].cureentMessageList;
                        if (res.data[0].recipientsId != localStorage.getItem("userId")) {
                            this.recipientsId = res.data[0].recipientsId;
                        } else {
                            this.recipientsId = res.data[0].addresserId;
                        }
                    }
                }
            })
        },
        sendMessage: function () {
            if (this.sendMsg.content == undefined || this.sendMsg.content.trim().length == 0) {
                ElMessage.error("不能发送空白消息！")
                return;
            }
            this.sendMsg.addresserId = localStorage.getItem("userId");
            this.sendMsg.recipientsId = this.recipientsId;
            httpUtil.postData("online/sendMessage", this.sendMsg).then(res => {
                if (res.code == 200) {
                    let temp = JSON.parse(JSON.stringify(this.sendMsg));
                    this.messageList.push(temp);
                    this.sendMsg.content = "";
                }
            })
        },
        initAndTrigger: function () {
            this.pullMessageTrigger = setInterval(() => {
                let message = {recipientsId: this.recipientsId, addresserId: localStorage.getItem("userId")};
                this.autoLoadUserMsg(message);
            }, 2000)
        },
        autoLoadUserMsg: function (message) {
            this.messageList = [];
            let userid = localStorage.getItem("userId");
            let url = '';
            if (message.addresserId == userid) {
                url = 'online/getUserMessage/' + userid + '/' + message.recipientsId;
                this.recipientsId = message.recipientsId;
            } else {
                url = 'online/getUserMessage/' + userid + '/' + message.addresserId;
                this.recipientsId = message.addresserId;
            }
            httpUtil.getData(url).then(res => {
                if (res.code == 200) {
                    this.messageList = res.data;
                }
            })
        },
        loadUserMsg: function (message) {
            if (this.pullMessageTrigger != null)
                clearInterval(this.pullMessageTrigger)
            if (message.addresserId == localStorage.getItem("userId")) {
                this.recipientsId = message.recipientsId;
            } else {
                this.recipientsId = message.addresserId;
            }
            this.initAndTrigger();
        },
        handleClose(){
            clearInterval(this.pullMessageTrigger)
        }
    },
    beforeDestroy() {
        clearInterval(this.pullMessageTrigger)
    }
}
</script>

<style scoped>
.dia {
    height: 500px;
    overflow-y: scroll;
}

.dia-info {
    height: 54px;
    width: 80%;
    margin-left: 30px;
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.1);
    float: left;
}

.message {
    height: 198px;
}
</style>