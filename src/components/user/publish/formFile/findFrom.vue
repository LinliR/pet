
<template>
  <el-form :model="formData">

    <el-form-item label="宠物名">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="formData.age" />
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="formData.sex">
        <el-radio value="man">男</el-radio>
        <el-radio value="woman">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="品种">
      <el-input v-model="formData.age" />
    </el-form-item>
    <el-form-item label="走失区域">
      <el-input v-model="formData.age" />
    </el-form-item>
    <el-form-item label="悬赏价格">
      <el-input v-model="formData.age" />
    </el-form-item>

    <el-form-item label="详情">
      <el-input type="textarea" v-model="formData.age" />
    </el-form-item>

    <el-form-item >
      <el-button type="primary">提交</el-button>
    </el-form-item>


  </el-form>
</template>

<script>

export default {
  data:function () {
    return{
      formData : {

      }
    }
  }
}

</script>


<style scoped>

</style>