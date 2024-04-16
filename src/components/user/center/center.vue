<template>
  <div class="center">
    <div class="user-info">
      <div class="user-image-div">
        <el-image class="user-image" :src="url" :fit="fit">
        </el-image>
      </div>
      <div class="user-info-context">
        <table>
          <tr>
            <td>昵称</td>
            <td>sdasdasd</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>sdasdasd</td>
          </tr>
          <tr>
            <td>所在地</td>
            <td>sdasdasd</td>
          </tr>
          <tr>
            <td colspan="2">个性签名</td>
          </tr>
          <tr>
            <td>
              <el-button type="danger" @click="loginOut()">登出</el-button>
            </td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import axiosInstance from '@/http/httpUtil.js'

export default {
  name: 'center',
  methods: {
    loginOut: function() {
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
