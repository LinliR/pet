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
              <el-button type="primary" @click="editFlag = true">编辑</el-button>
              <el-button type="warning" @click="pwdFlag = true">修改密码</el-button>
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
      <el-card class="pet-content" v-for="animal in sendAnimalArr" :key="animal.id" @click="petInfo(animal)">
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
        <el-image style="height: 200px;width:280px" height="200px" :src="animal.animalImgList[0] ? animal.animalImgList[0].url : 'http://localhost:8080/defaultImg.jpg'">
          <template #error>
            <el-image  style="height: 200px;width:280px"  src='http://localhost:8080/defaultImg.jpg'></el-image>
          </template>
        </el-image>
<!--        <img :src="animal.animalImgList[0] ? animal.animalImgList[0].url : ''" height="200px" width="320px"/>-->
        <p style="margin-top: 6px;float: left">{{ animal.province }}{{ animal.city }}</p>
        <div style="margin-top: 6px;float: right">
          <el-button v-if="animal.state != 0" type="danger" style="height: 26px" @click="deletePet(animal)">删除
          </el-button>
            <el-button v-if="animal.state != 2" type="danger" style="height: 26px" @click.stop="updatePet(animal,'/adoptCommit')">编辑
            </el-button>
        </div>
      </el-card>
      <div style="margin-top: 30px;text-align: center;">
        <el-pagination background @current-change="getMySendPet" :pageCount="sendAnimalCount"
                       v-model:current-page="current"
                       layout="prev, pager, next" :total="totalSend" style="margin-left: 40%;"/>
      </div>

      <h1 style="margin-top: 30px">我的遗宠</h1>
      <el-card class="pet-content" v-for="findData in searchAnimalArr" :key="findData.id"
               @click="petInfo(findData)">
        <template #header>
          {{ findData.name }}
          <div style="display: inline-block;float: right">
            <div class="tag">
              <el-tag type="primary">RMB:{{ findData.reward }}</el-tag>
            </div>
          </div>
        </template>
        <el-image style="height: 200px;width:280px" height="200px" :src="findData.animalImgList[0] ? findData.animalImgList[0].url : 'http://localhost:8080/defaultImg.jpg'">
          <template #error>
            <el-image  style="height: 200px;width:280px"  src='http://localhost:8080/defaultImg.jpg'></el-image>
          </template>
        </el-image>
        <p style="margin-top: 6px;float: left">{{ findData.province }}{{ findData.city }}</p>
        <div style="margin-top: 6px;float: right">
          <el-button  type="danger" style="height: 26px" @click="deletePet(findData)">删除
          </el-button>
        </div>
      </el-card>
      <div style="margin-top: 30px;text-align: center;">
        <el-pagination background @current-change="getMySearchPet" :pageCount="searchAnimalCount"
                       v-model:current-page="currentSearch"
                       layout="prev, pager, next" :total="totalSearch" style="margin-left: 40%;"/>

      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>


  <el-dialog
      v-model="editFlag"
      title="Tips"
      width="800"
  >
    <div>
      <h1>编辑</h1>
      <el-form :model="loginData" style="margin-top: 20px;margin-left: 10px" label-position="left">
        <el-form-item>
          <el-form-item label="账户名" class="ml20px">
            <el-input v-model="loginData.account" class="login-input"/>
          </el-form-item>
          <el-form-item label="昵称" class="ml20px">
            <el-input v-model="loginData.userName" class="login-input"/>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-form-item label="手机号" class="ml20px">
            <el-input v-model="loginData.tel" :rules="phoneNumberRules" class="login-input"/>
          </el-form-item>
          <el-form-item label="邮件" class="ml20px">
            <el-input v-model="loginData.email" class="login-input"/>
          </el-form-item>
        </el-form-item>
        <el-form-item>

          <el-form-item label="地址" class="ml20px">
            <el-input v-model="loginData.address" class="login-input"/>
          </el-form-item>
        </el-form-item>

        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="loginData.signature" class="login-input" style="width: 500px"/>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="editCommit" style="margin-left: 670px;">编辑</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>

  <el-dialog
      v-model="pwdFlag"
      title="修改密码"
      width="400"
  >
    <div>
      <el-form :model="pwd" style="margin-top: 20px;margin-left: 10px" label-position="left">
        <el-form-item label="旧密码" class="ml20px">
          <el-input v-model="pwd.oldPwd" class="login-input"/>
        </el-form-item>
        <el-form-item>
          <el-form-item label="新密码" class="ml20px">
            <el-input v-model="pwd.newPwd" class="login-input"/>
          </el-form-item>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="updatePwd" style="margin-left: 300px;">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
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
      sendAnimalArr: [],
      searchAnimalArr: [],
      editFlag: false,
      loginData: {},
      pwd: {
        oldPwd: '',
        newPwd: ''
      },
      pwdFlag: false,
      sendAnimalCount: 1,
      current: 1,
      totalSend: 0,
      pageAnimalSize: 4,
      totalAnimal: 0,
      totalSearch: 0,
      currentSearch: 1,
      searchAnimalCount: 1,
      pageAnimalSearchSize: 4,
    }
  },
  methods: {
    getData: function () {
      var userId = localStorage.getItem('userId')
      let url = "/user/get/" + userId;
      httpUtil.get(url).then(res => {
        if (res.code == 200) {
          this.userData = res.data;
          this.loginData = res.data;
        }
      });
    },
    editCommit: function () {
      console.log(this.loginData)
      let url = "user/modifyUserInfo";
      let params = this.loginData;

      httpUtil.post(url, params).then(res => {
        if (res.code === 200) {
          ElMessage({
            message: '保存成功！',
            type: 'success'
          })
          this.editFlag = false;
        }
      })
    },
    updatePwd: function () {
      if (this.pwd.newPwd === undefined || this.pwd.newPwd.length < 6 || this.pwd.newPwd.length > 12) {
        ElMessage.error('请输入大于6位且小于12位的密码');
        return false;
      }
      let params = this.pwd;

      let url = 'user/changePwd/' + params.oldPwd + "/" + params.newPwd;
      axiosInstance.get(url, params).then(res => {
        if (res.code === 200) {
          ElMessage({
            message: '保存成功！',
            type: 'success'
          })
          this.pwdFlag = false;
        }
      });
    },
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
    },
    deletePet: function (animal) {
      let url = "animalInfo/" + animal.id;

      httpUtil.delete(url).then(res => {
        if (res.code === 200) {
          ElMessage({
            message: '删除成功！',
            type: 'success'
          })
          this.getMySendPet();
          this.getMySearch();
        }
      })
    },
      updatePet: function (animal,path) {
          let animalStr = JSON.stringify(animal);
          this.$router.push({
              path: path,
              query: {animal: animalStr}
          })
      },
    getMySendPet: function () {
      let url = 'animalInfo/getMySendAnimal/' + this.current + '/' + this.pageAnimalSize
      httpUtil.getData(url).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.sendAnimalArr = res.data.records;
          this.sendAnimalCount = res.data.pages;
        }
      })
    },
    getMySearchPet: function () {
      let url = 'animalInfo/getMySearchAnimal/' + this.currentSearch + '/' + this.pageAnimalSearchSize
      httpUtil.getData(url).then(res => {
        if (res.code == 200) {
          this.searchAnimalArr = res.data.records;
          this.searchAnimalCount = res.data.pages;
        }
      })
    },
    petInfo: function (obj) {

      let id = obj.id
      console.log(obj)
      this.$router.push({
        path: '/userPet',
        query: {id: id}
      })
    }
  },
  mounted() {
    this.getData();
    this.getMySendPet();
    this.getMySearchPet();
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
