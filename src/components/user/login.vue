<template>
    <el-dialog v-model="top" style="width: 1000px;height: 300px" :before-close="closeFun">
        <div>
            <h1>登录</h1>

            <el-form :model="loginData" style="margin-top: 20px;margin-left: 10px">
                <el-form-item label="账号">
                    <el-input v-model="loginData.account" class="login-input"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginData.password" class="login-input"/>
                </el-form-item>
                <el-form-item style="">
                    <el-button type="primary" @click="loginCommit">提交</el-button>
                    <span @click="transRegister()">
            注册新用户
          </span>
                </el-form-item>
            </el-form>
        </div>


    </el-dialog>
</template>

<script>
import http from "@/http/httpUtil.js";
import {ElMessage} from "element-plus";
import {reactive} from "vue";


export default {
    data: function () {
        return {
            top: true,
            loginData:{}
        }
    },
    mounted() {
        let item = localStorage.getItem("userInfo");
        if (item) {
            this.loginData = JSON.parse(item);
        }
    },
    methods: {
        transRegister: function () {
            this.$router.push('register');
        },
        closeFun: function () {
            this.$router.back();
        },
        loginCommit: function () {
            let loginForm = this.loginData
            let url = "user/login/" + loginForm.account + "/" + loginForm.password;
            http.get(url, null).then(res => {
                if (res.code == 200) {
                    ElMessage({
                        message: '登录成功！',
                        type: 'success',
                    });
                    let data = res.data;
                    localStorage.setItem("userId", data.id);
                    localStorage.setItem("userName", data.userName);
                    this.$router.back();
                } else {
                    ElMessage.error(res.message);
                }
            })
        }
    }
}
</script>

<style scoped>
.login-info {
    text-align: center;
}

.login-input {
    width: 300px;
}
</style>
