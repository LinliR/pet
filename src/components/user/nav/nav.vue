<template>
  <div class="nav-header">
    <div class="nav-center">

      <div class="nav_left">
        <router-link class="link-button" :to="nav.router" v-for="nav in nav_left">
          {{ nav.name }}
        </router-link>
      </div>

      <div class="nav_right">
        <div class="link-button" v-for="nav in nav_right" @click="routerPush(nav)">
          {{ nav.router === 'center' && userName !== null ? userName : nav.name }}
        </div>
      </div>

    </div>
  </div>
  <div>

  </div>

</template>

<script>
export default {
  name: "user-nav",
  data: function () {
    return {
      nav_left: [
        {
          name: "首页",
          router: "home"
        },
        {
          name: "领养",
          router: "adopt"
        },
        {
          name: "送养",
          router: "find"
        }
      ],
      nav_right: [
        {
          name: "用户",
          router: "center"
        },
        {
          name: "消息",
          router: "message"
        },
        {
          name: "收藏",
          router: "collection"
        },
        {
          name: "发布",
          router: "publish"
        }
      ],
      userName: localStorage.getItem("userName")
    }
  },
  methods: {
    routerPush: function (nav) {
      if (nav.router === "center" || nav.router === "publish") {
        var userId = localStorage.getItem("userId");
        if (!userId) {
          this.$router.push({
            name: "user_login",
          })
          return;
        }
      }
      this.$router.push(nav.router)
    }
  },
}
</script>

<style scoped>
.nav-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  //background: rgba(0, 0, 0, 0.1);
  width: 100%;
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
  text-decoration: none;
  font-size: 18px;
  color: black;
  font-weight: bolder;
  display: inline-block;
}
</style>
