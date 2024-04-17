

<template>
  <el-row style="margin-top: 20px">
    <el-col :span = "2"></el-col>
    <el-col :span = "20">
      <el-table :data="tableData" border stripe style="width: 1500px;margin-top: 30px;margin-left: 5%;">
        <el-table-column prop="petName" label="宠物" width="180" />
        <el-table-column prop="userName" label="发布者" width="180" />
        <el-table-column prop="adoptName" label="收养人" width="180" />
        <el-table-column prop="review" label="收养心得" width="180" />

        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
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
      <div style="margin-top: 30px;width: 100%">
        <el-pagination style="margin-left: 40%" @current-change="loadData" v-model:current-page="current" layout="prev, pager, next" :total="total.valueOf()" />
      </div>
    </el-col>
    <el-col :spam = "20"></el-col>
  </el-row>

</template>

<script >
export default {
  data:function (){
    return{
      tableData:[
        {
          "userName":"li",
          "adoptName":"Jerry",
          "petName":"支竹",
          "review" : "dasdasdasdausvd"
        },
        {
          "userName":"chen",
          "adoptName":"Tom",
          "petName":"懒懒",
          "review":"2024-02-05 14:22:11 dasdas ",
        },
      ],
      current :1 ,
      pageSize:10,
      total:0,
    }
  },
  methods:{
    loadData:function (){

    }
  }
}
</script>0

<style scoped>

</style>