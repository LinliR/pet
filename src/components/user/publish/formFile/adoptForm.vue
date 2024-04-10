<template>
  <el-form :model="formData" style="margin-left:20px;margin-top: 30px;">
    <el-form-item>
      <el-form-item label="宠物名">
        <el-input v-model="formData.name"/>
      </el-form-item>
      <div style="margin-left: 20px;"></div>
      <el-form-item label="年龄">
        <el-input v-model="formData.age"/>
      </el-form-item>
      <div style="margin-left: 20px;"></div>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.sex">
          <el-radio value="man">男</el-radio>
          <el-radio value="woman">女</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form-item>


    <el-form-item>
      <el-form-item label="品种">
        <el-input v-model="formData.age"/>
      </el-form-item>
      <div style="margin-left: 30px;"></div>
      <el-form-item label="宠物特性">
        <el-checkbox-group v-model="formData.type">
          <el-checkbox value="Online activities" name="type">
            已绝育
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            已免疫
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            已驱虫
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form-item>

    <el-form-item>
      <el-form-item label="地区">
        <el-input style="margin-left: 10px; width: 100px" v-model="formData.age" placeholder="省"/>
        <el-input style="margin-left: 10px; width: 100px" v-model="formData.age" placeholder="市"/>
        <el-input style="margin-left: 10px; width: 100px" v-model="formData.age" placeholder="区"/>
      </el-form-item>
      <div style="margin-left: 30px;"></div>
      <el-form-item label="领养后需要打卡">
        <el-input v-model="formData.age"/>
      </el-form-item>
    </el-form-item>

    <el-form-item label="送养后描述">
      <el-input type="textarea" v-model="formData.age" style="width: 600px;" />
    </el-form-item>

    <el-form-item label="图片">
      <el-icon><Plus /></el-icon>
    </el-form-item>

    <el-form-item style="float: right;margin-right: 50px;margin-top: 30px;">
      <el-button type="primary">提交</el-button>
    </el-form-item>


  </el-form>
</template>

<script>

export default {
  data: function () {
    return {
      formData: {}
    }
  }
}

</script>


<style scoped>

</style>