

<template>
  <el-row style="margin-top: 20px">
    <el-col :span = "2"></el-col>
    <el-col :span = "20">
      <el-table :data="tableData" border stripe style="width: 1500px;margin-top: 30px;margin-left: 5%;">
        <el-table-column prop="username" label="评论者" width="180" />
        <el-table-column prop="bizName" label="宠物" width="180" />
        <el-table-column prop="comment" label="内容" width="580" />
        <el-table-column prop="createTime" label="评论时间" width="180" />

        <el-table-column label="Operations">
          <template #default="scope">
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
        <el-pagination style="margin-left: 40%" @current-change="loadData" :pageCount="pageCount" v-model:current-page="current" layout="prev, pager, next" :total="total.valueOf()" />
      </div>
    </el-col>
    <el-col :spam = "20"></el-col>
  </el-row>

</template>

<script >
import http from "@/http/httpUtil.js";
import {ElMessage} from "element-plus";

export default {
  data:function (){
    return{
      tableData:[
      ],
      current :1 ,
      pageSize:10,
      pageCount:0,
      total:0,
    }
  },
  methods:{
    loadData:function (){
      let url = 'comment/page/' + this.current + '/' + this.pageSize
      http.getData(url).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.tableData = res.data.records
          this.total = res.data.total
          this.pageCount = res.data.pages;
        }
      })
    },
    handleDelete:function (index,row){
      http.deleteData("comment/"+row.id).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: '删除成功！',
            type: 'success',
          });
        }
        this.loadData();
      })
    }
  },
  created() {
    this.loadData();
  }
}
</script>0

<style scoped>

</style>