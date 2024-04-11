

<template>
  <el-table :data="tableData" border stripe style="width: 1560px;margin-top: 30px;margin-left: 5%;">
    <el-table-column prop="name" label="宠物名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="sex" label="性别" width="180" />
    <el-table-column prop="species" label="品种" width="180" />
    <el-table-column  label="宠物特性" width="180">
      <template #default="scope">
        <div class="tag"  v-for="degree in scope.row.degrees" :key="degree.index">
          <el-tag type="danger" v-if="degree.index === 1">{{ degree.name }}</el-tag>
          <el-tag type="danger" v-if="degree.index === 2">{{ degree.name }}</el-tag>
          <el-tag type="primary" v-if="degree.index === 3">{{ degree.name }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="province" label="地区" width="180" />
    <el-table-column prop="needCardNum" label="领养后需要打卡" width="180" />
    <el-table-column prop="description" label="送养后描述" width="180" />
    <el-table-column prop="userName" label="发布者" width="180" />

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

<script >
export default {
  data:function (){
    return{
      tableData:[
        {
          "name":"喵喵",
          "age":"li",
          "sex":"男",
          "species":"喵星人",
          degrees : [
            {
              index : 1,
              name : "已检疫"
            },
            {
              index : 2,
              name : "已绝育"
            },
            {
              index : 3,
              name : "已免疫"
            },
          ],
          "province":"甘肃省 兰州市 城关区",
          "needCardNum" :1,
          "description":"数风流人物，还看今朝",
          "userName":"小李"
        }
      ]
    }
  }
}
</script>0

<style scoped>

</style>