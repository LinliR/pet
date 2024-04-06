<template>
  <user_nav></user_nav>

  <div style="margin-top: 20px;"></div>
<!--  <home></home>-->
<!--  <adopt></adopt>-->
  <router-view></router-view>
  <div>



  </div>
</template>

<script>
import user_nav from "./nav/nav.vue";

export default {
  components: {
    user_nav,
  },
  name: "index",


}
</script>

<style scoped>

</style>
