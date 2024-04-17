<template>

  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      router
  >
    <div style="margin-left: 10%"></div>
    <el-menu-item index="userManage">普通用户</el-menu-item>
    <el-menu-item index="pet">动物信息</el-menu-item>
    <el-menu-item index="reviewManage">评论管理</el-menu-item>
    <div  style="margin-top:17px;float: right;display: inline-block;margin-left: 50%;">
      宠物收养管理系统
    </div>
  </el-menu>

  <router-view></router-view>



</template>

<script>
export default {
    name: "index-admin",
  data:function (){
      return{
      tableData:[
        {
          "account":"小李",
          "userName":"li",
          "tel":"13123123",
          "address":"甘肃省 兰州市 城关区",
          "email":"1111@email.com",
          "signature":"数风流人物，还看今朝",
          "userType":"用户"
        },
        {
          "account":"小林",
          "userName":"lin",
          "tel":"13141314",
          "address":"广东省 深圳市 南山区",
          "email":"2222@email.com",
          "signature":"雄关漫道真如铁 而今迈步从头越",
          "userType":"用户"
        },
        {
          "account":"小陈",
          "userName":"chen",
          "tel":"151151515",
          "address":"北京市 朝阳区",
          "email":"33333@email.com",
          "signature":"但愿人长久，千里共长娟",
          "userType":"用户"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
