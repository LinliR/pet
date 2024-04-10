<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >

    <div class="flex-grow" />
    <el-menu-item index="1">普通用户</el-menu-item>
    <el-menu-item index="2">动物信息</el-menu-item>
    <el-menu-item index="3">收养心得信息</el-menu-item>

    <div  style="margin-top:17px;float: right;display: inline-block;margin-left: 1100px">
      宠物收养管理系统
    </div>
  </el-menu>



  <el-table :data="tableData" style="width: 100%;margin-top: 30px;margin-left: 10%;">
    <el-table-column prop="account" label="账号" width="180" />
    <el-table-column prop="userName" label="用户名" width="180" />
    <el-table-column prop="tel" label="手机号" width="180" />
    <el-table-column prop="address" label="地址" width="180" />
    <el-table-column prop="email" label="邮件" width="180" />
    <el-table-column prop="signature" label="个性签名" width="180" />
    <el-table-column prop="userType" label="用户类型" width="180" />

    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >修改密码</el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
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
