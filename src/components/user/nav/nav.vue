<template>
  <el-row gutter="20" class="nav-header">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="nav_left">
        <router-link :to="nav.router" v-for="nav in nav_left" @click="changeNowOpera(nav)"
                     :class="nowOpera == nav.router ? 'link-button click_opera' : 'link-button'">
          {{ nav.name }}
        </router-link>
      </div>
      <div class="nav_right">
        <div v-for="nav in nav_right" @click="routerPush(nav)"
             :class="nowOpera == nav.router ? 'link-button click_opera' : 'link-button'">
          {{ nav.router === 'center' && userName !== null ? userName : nav.name }}
        </div>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

</template>

<script>
import login from '../login.vue'

export default {
  name: 'user-nav',
  data: function() {
    return {
      nav_left: [
        {
          name: '首页',
          router: 'home'
        },
        {
          name: '领养',
          router: 'adopt'
        },
        {
          name: '寻宠',
          router: 'find'
        }
      ],
      nav_right: [
        {
          name: '用户',
          router: 'center'
        },
        {
          name: '消息',
          router: 'message'
        },
        {
          name: '收藏',
          router: 'collection'
        },
        {
          name: '发布',
          router: 'publish'
        }
      ],
      userName: localStorage.getItem('userName'),
      nowOpera: ''
    }
  },
  methods: {
    routerPush: function(nav) {
      var userId = localStorage.getItem('userId')
      if (!userId) {
        this.$router.push({
          name: 'user_login'
        })
        return
      }

      this.$router.push(nav.router)
      this.changeNowOpera(nav)
    },
    changeNowOpera: function(nav) {
      let routher = nav.router
      this.nowOpera = routher
    }
  }
}
</script>

<style scoped>
.nav-header {
  height: 50px;
  border-bottom: 1px solid #eee;
}

.nav-center {
  margin-left: 10%;
  margin-right: 10%;
}

.nav_left {
  float: left;
}

.nav_right {
  float: right;
}

.link-button {
  margin-left: 10px;
  margin-top: 10px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: inline-block;
  cursor: pointer;
}

.click_opera {
  color: #409EFF;
}
</style>
