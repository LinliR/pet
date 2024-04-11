

<template>
  <el-table :data="tableData" border stripe style="width: 1500px;margin-top: 30px;margin-left: 5%;">
    <el-table-column prop="petName" label="宠物" width="180" />
    <el-table-column prop="userName" label="发布者" width="180" />
    <el-table-column prop="adoptData" label="收养日期" width="180" />
    <el-table-column prop="adoptName" label="收养人" width="180" />
    <el-table-column prop="desc" label="收养心得" width="180" />

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
</template>

<script >
export default {
  data:function (){
    return{
      tableData:[
        {
          "petName":"支竹",
          "userName":"li",
          "adoptData":"2024-02-01 14:22:11",
          "adoptName":"小李",
          "desc":"这只猫这可爱～",
        },
        {
          "petName":"懒懒",
          "userName":"chen",
          "adoptData":"2024-02-05 14:22:11",
          "adoptName":"小陈",
          "desc":"这只狗真懒",
        },
      ]
    }
  }
}
</script>0

<style scoped>

</style>