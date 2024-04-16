<template>
  <user_nav></user_nav>
  <el-affix :offset="500" position="top">
    <el-button type="primary" style="margin-left: 30px;float: right;margin-right: 50px" @click="isDialogueFlag = true">
      打开对话
    </el-button>
  </el-affix>
  <div style="margin-top: 20px;"></div>
  <!--  <home></home>-->
  <!--  <adopt></adopt>-->
  <router-view></router-view>

  <el-drawer
      v-model="isDialogueFlag"
      title="对话消息"
      :direction="direction"
      :before-close="handleClose"
      size="70%"
  >
    <dialogue></dialogue>
  </el-drawer>
</template>

<script>
import user_nav from "./nav/nav.vue";
import dialogue from "./message/operation/dialogue.vue";

export default {
  components: {
    user_nav,
    dialogue
  },
  name: "index",
  data: function () {
    return {
      isDialogueFlag: false
    }
  }


}
</script>

<style scoped>

</style>
