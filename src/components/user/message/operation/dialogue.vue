<template>
  <el-row style="height: 100%;">
    <!--用户列表-->
    <el-col :span="4" style="height: 100%;">
      <el-card style="height: 100%;" shadow="none">
        <el-col :span="24">
          <el-menu default-active="3" style="border: none;" class="el-menu-vertical-demo"
                   @open="handleOpen" @close="handleClose"
          >
            <el-menu-item :index="index" v-for="(user,index) in userList">
              <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
              <span style="margin-left: 10px">{{ user.name }}</span>
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
              <div v-if="item.userId !== 0" style="position:relative;">
                <div style="width: 50px;height: 50px;display: inline-block;">
                  <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
                </div>
                <div style="display: inline-block;position: relative;position: relative;bottom: 20px;">
                  {{ item.userName }}
                </div>
              </div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="18">
              <div style="display: inline-block;padding: 5px;border-radius: 20px"
                   :style=" item.userId !== 0 ? 'background:rgba(0,0,0,0.1);' : 'color: white;background:#337ecc;float:right'"
              >
                {{ item.message }}
              </div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="2">
              <div v-if="item.userId === 0">
                <div
                    style="display: inline-block;position: relative;position: relative;bottom: 20px;margin-right: 10px">
                  {{ item.userName }}
                </div>
                <div style="width: 50px;height: 50px;display: inline-block;">
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <!--发送消息部分-->
      <el-card style="height: 20%;overflow-y: scroll;">
        <el-input type="textarea" autosize="70%" placeholder="快来开始对话吧..."/>
        <el-button type="primary" style="margin-top: 20px;float:right;">发送</el-button>
      </el-card>

    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'collection',
  data: function () {
    return {
      userList: [
        {
          "id": 1,
          "name": "小李"
        },
        {
          "id": 2,
          "name": "小陈"
        },
        {
          "id": 3,
          "name": "小许"
        },
      ],
      messageList: [
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "1dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fgadcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvb" +
              "iu;dwkcgpsdici;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fg adcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvb" +
              "iu;dwkcgpsdic"
        },
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "2dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fgadcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvb" +
              "iu;dwkcgpsdici;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fg adcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvb" +
              "iu;dwkcgpsdic"
        },
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "3dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fgadcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fgadcvb" +
              "iu;dwkcgpsdici;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;i;fg adcvbiu;" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv"
        },
        {
          "userId": 0,
          "userName": '我',
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdic"
        },
        {
          "userId": 1,
          "userName": "小李",
          "message": "dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvbiu;dwkcgpsdicdasdbdsfgavnfukvbdfivbdfkv" +
              "bi;fg adcvbiu;dwkcgpsdic dasdbdsfgavnfukvbdfivbdfkvbi;fg adcvb" +
              "iu;dwkcgpsdic"
        }
      ]
    }
  },
  methods: {
    load() {

    }
  },
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