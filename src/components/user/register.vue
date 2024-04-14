<script>
import http from "@/http/httpUtil.js";
import {ElMessage} from "element-plus";

export default {
  data: function () {
    return {
      top: true,
      loginData: {}
    }
  },
  methods: {
    transRegister: function () {
      this.$router.push('register');
    },
    closeFun: function () {
      this.$router.back();
    },
    register: function () {
      let loginForm = this.loginData;
      http.post("user/regist", loginForm).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: '保存成功！',
            type: 'success',
          });
          this.$router.back();
        } else {
          ElMessage.error("保存失败！")
        }
      })

    }
  }
}
</script>

<template>
  <el-dialog v-model="top" style="width: 800px;height: 358px" :before-close="closeFun">
    <div>
      <h1>注册新用户</h1>
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
            <el-input v-model="loginData.tel" class="login-input"/>
          </el-form-item>
          <el-form-item label="密码" class="ml20px">
            <el-input v-model="loginData.password" class="login-input"/>
          </el-form-item>

        </el-form-item>
        <el-form-item>
          <el-form-item label="邮件" class="ml20px">
            <el-input v-model="loginData.email" class="login-input"/>
          </el-form-item>
          <el-form-item label="地址" class="ml20px">
            <el-input v-model="loginData.address" class="login-input"/>
          </el-form-item>
        </el-form-item>

        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="loginData.signature" class="login-input" style="width: 500px"/>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="register" style="margin-left: 670px;">注册</el-button>
        </el-form-item>
      </el-form>
    </div>


  </el-dialog>
</template>

<style scoped>
.login-info {
  text-align: center;
}

.login-input {
  width: 300px;
}

</style>