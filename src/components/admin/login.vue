

<template>
    <div class="login">
      <div class="login-card-left">
          <el-card class="login-info">
            <h1>登录</h1>

            <el-form :model="loginData" style="margin-top: 20px;margin-left: 10px">
              <el-form-item label="账号">
                <el-input v-model="loginData.loginName" class="login-input"/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="loginData.loginPassword" class="login-input"/>
              </el-form-item>
              <el-form-item style="float: right;margin-right: 50px;margin-top: 30px;">
                <el-button type="primary" @click="loginCommit">登录</el-button>
              </el-form-item>

            </el-form>

          </el-card>

      </div>

    </div>

</template>

<script>
import http from '../../http/httpUtil.js'
import { ElMessage } from 'element-plus'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  data: function () {
    return {
      loginData:
          {
            loginName: '',
            loginPassword: '',
          }

    }
  },
  methods:{
    loginCommit:function (){
      let loginForm = this.loginData;
      if (loginForm.loginName != '' && loginForm.loginPassword != ''){
          let url='admin/adminLogin/'+loginForm.loginName+'/'+loginForm.loginPassword;
          http.getData(url).then(res =>{
              if (res.code==200){
                  localStorage.setItem("userId",res.data.id)
                  this.$router.push('adminIndex');
              }else {
                  ElMessage.error("登录失败！，请重新输入账号密码");
              }
          })
      }

    }
  }
}
</script>

<style scoped>
.login{
  margin: 5% auto;
  width: 1200px;
  height: 720px;
  background-image:url("../../assert/images/login.jpg") ;

}
.login-card-left{
  width: 500px;
  height: 720px;
  margin-left: 30px;
  margin-top: 100px;
  position: relative;
}
.login-info{
  text-align: center;
  position: relative;
  width: 460px;
  height: 300px;
  top: 200px;
}
.login-input{
  width: 300px;
}
</style>