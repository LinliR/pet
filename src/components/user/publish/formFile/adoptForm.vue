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
        <el-radio-group v-model="formData.gender">
          <el-radio value="man">男</el-radio>
          <el-radio value="woman">女</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form-item>


    <el-form-item>
      <el-form-item label="品种">
        <el-input v-model="formData.species"/>
      </el-form-item>
      <div style="margin-left: 30px;"></div>
      <el-form-item label="宠物健康信息">
        <el-checkbox-group v-model="formData.animalHealthInfo">
          <el-checkbox value="sterilization" name="type">
            已绝育
          </el-checkbox>
          <el-checkbox value="immune" name="type">
            已免疫
          </el-checkbox>
          <el-checkbox value="desinsectization" name="type">
            已驱虫
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form-item>

    <el-form-item>
      <el-form-item label="地区">
        <el-input style="margin-left: 10px; width: 100px" v-model="formData.province" placeholder="省"/>
        <el-input style="margin-left: 10px; width: 100px" v-model="formData.city" placeholder="市"/>
      </el-form-item>
      <div style="margin-left: 30px;"></div>
      <el-form-item label="领养后需要打卡">
        <el-input v-model="formData.needCardNum"/>
      </el-form-item>
    </el-form-item>

    <el-form-item label="宠物描述">
      <el-input type="textarea" v-model="formData.description" style="width: 600px;" />
    </el-form-item>

    <el-form-item label="图片">
      <el-icon><Plus /></el-icon>
    </el-form-item>

    <el-form-item style="float: right;margin-right: 50px;margin-top: 30px;">
      <el-button @click="submitAnimalInfo()" type="primary">提交</el-button>
    </el-form-item>


  </el-form>
</template>

<script>
import {reactive} from 'vue'
import http from '../../../../http/httpUtil.js'
import { ElMessage } from 'element-plus'
export default {


    setup(){
        const formData=reactive({})
        return{
            formData
        }
    },
    methods:{
        submitAnimalInfo(){
            let animalInfo=JSON.parse(JSON.stringify(this.formData));

            let animalHealthInfo={sterilization:"False",immune:"False",desinsectization:"False"};
            if (this.formData.animalHealthInfo.length>0) {

                if (this.formData.animalHealthInfo.includes("sterilization"))
                    animalHealthInfo.sterilization = "True";
                if (this.formData.animalHealthInfo.includes("immune"))
                    animalHealthInfo.immune = "True";
                if (this.formData.animalHealthInfo.includes("desinsectization"))
                    animalHealthInfo.desinsectization = "True";
            }
            animalInfo.animalHealthInfo=animalHealthInfo;
            animalInfo.animalState='send';
            http.post("animalInfo/add",animalInfo).then(res =>{
                if (res.code==200){
                    ElMessage({
                        message: '保存动物信息成功！',
                        type: 'success',
                    })
                }else {
                    ElMessage.error("保存动物信息失败！")
                }
            })
        }
    }
}

</script>


<style scoped>

</style>