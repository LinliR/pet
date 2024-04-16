<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card>
        <template #header>
          <h1>个人信息</h1>
        </template>
        <el-row>
          <el-col :span="18">
            <el-descriptions>
              <el-descriptions-item label="账户名">{{ userData.account }}</el-descriptions-item>
              <el-descriptions-item label="昵称">{{ userData.userName }}</el-descriptions-item>
              <el-descriptions-item label="手机号">{{ userData.tel }}</el-descriptions-item>
              <el-descriptions-item label="邮件">{{ userData.email }}</el-descriptions-item>
              <el-descriptions-item label="地址">{{ userData.address }}</el-descriptions-item>
              <el-descriptions-item label="个性签名">{{ userData.signature }}</el-descriptions-item>
            </el-descriptions>
          </el-col>
          <el-col :span="6">
            <el-card>
              <el-button type="danger" @click="loginOut()">登出</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

  <br>

  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>我的宠物</h1>
      <el-card class="pet-content" v-for="animal in hotAnimalArray" :key="animal.id" @click="petInfo(animal)">
        <template #header>
          {{ animal.name }}
          <div v-if="animal.animalHealthInfo==null" style="display: inline-block;float: right">
            <el-tag type="danger">暂无健康信息</el-tag>
          </div>
          <div v-else-if="animal.animalHealthInfo!=null" style="display: inline-block;float: right">
            <el-tag v-if="animal.animalHealthInfo.sterilization=='False'" type="danger">未绝育</el-tag>
            <el-tag v-if="animal.animalHealthInfo.sterilization=='True'" type="success">已绝育</el-tag>
            <el-tag v-if="animal.animalHealthInfo.immune=='False'" type="danger">未免疫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.immune=='True'" type="success">已免疫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.desinsectization=='False'" type="danger">未驱虫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.desinsectization=='True'" type="success">已驱虫</el-tag>
          </div>
        </template>
        <img :src="animal.animalImgList[0].url" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ animal.province }}{{ animal.city }}</p>
      </el-card>

      <h1 style="margin-top: 30px">我的遗宠</h1>
      <el-card class="pet-content" v-for="findData in hotSearchAnimalArray" :key="findData.id"
               @click="petInfo(findData)">
        <template #header>
          {{ findData.name }}
          <div style="display: inline-block;float: right">
            <div class="tag">
              <el-tag type="primary">RMB:{{ findData.reward }}</el-tag>
            </div>
          </div>
        </template>
        <img :src="findData.imgSrc" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ findData.province }}{{ findData.city }}</p>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<script>
import {ElMessage} from 'element-plus'
import axiosInstance from '@/http/httpUtil.js'
import httpUtil from "@/http/httpUtil.js";

export default {
  name: 'center',
  data: function () {
    return {
      userData: {
        account: "123",
        userName: "asdasd",
        tel: '14213123',
        email: '@qqw',
        address: "NewYork",
        signature: "afkosvhsidvbsdlycgaucvacuyguy"
      },
      hotAnimalArray: [],
      hotSearchAnimalArray: []
    }
  },
  methods: {
    loginOut: function () {
      var userId = localStorage.getItem('userId')
      if (userId) {
        let url = '/user/logOut/' + userId
        axiosInstance.delete(url).then(res => {
          if (res.code === 200) {
            ElMessage({
              message: '登出成功！',
              type: 'success'
            })
            localStorage.removeItem('userId')
            localStorage.removeItem('userName')
            this.$router.push('home')
          }
        })
      }
    }
  },
  mounted() {
    httpUtil.getData('animalInfo/hotAnimal').then(res => {
      console.log(res)
      if (res.code == 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.hotAnimalArray.push(res.data[i])
        }
      }
    })
    httpUtil.getData('animalInfo/hotSearchAnimal').then(res => {
      if (res.code == 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.hotSearchAnimalArray.push(res.data[i])
        }
      }
    })
  }
}
</script>

<style scoped>
.center {
  margin-left: 10%;
  margin-right: 10%;
  width: 1920px;
  background: rgba(0, 0, 0, 0.1);
  height: 300px;
}

.user-image-div {
  width: 500px;
  background: rgba(0, 0, 0, 0.1);
  height: 300px;
  float: left;
}

.user-info-context {
  width: 1000px;
  height: 300px;
  background: rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-left: 30px;
}

.user-image {
  width: 320px;
  height: 300px;
  margin-left: 100px;
}

.user-info-context table td {
  height: 30px;
}
</style>
