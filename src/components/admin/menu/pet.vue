<template>
  <el-row style="margin-top: 30px;">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card class="pet-content" style="height: 340px" v-for="animal in hotAnimalArray" :key="animal.id" @click="petInfo(animal)">
        <template #header>
          {{ animal.name }}
          <div v-if="animal.animalHealthInfo==null" style="display: inline-block;float: right">
            <el-tag type="danger">暂无健康信息</el-tag>
          </div>
          <div v-else-if="animal.animalHealthInfo!=null" style="display: inline-block;float: right">
            品种：{{animal.species}}  类型：{{animal.animalState == 'send' ? "收养" : "寻宠"}}
          </div>
        </template>
        <img :src="animal.animalImgList[0].url" height="180px" width="320px"/>
        <template #footer>
          <div style="float: right">
            <el-button v-if="animal.state=='0'" @click="approvalAnimal(animal)" type="success">审核</el-button>
            <el-button v-if="animal.state=='0'" @click="reject(animal)" type="danger">驳回</el-button>
          </div>
        </template>
      </el-card>

    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <div style="margin-top: 30px;width: 100%">
    <el-pagination style="margin-left: 47%" @current-change="loadData" v-model:current-page="current" layout="prev, pager, next" :total="total.valueOf()" />
  </div>
</template>

<script >
import httpUtil from "@/http/httpUtil.js";
import {ElMessage} from 'element-plus'

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
      ],
      hotAnimalArray :[],
      hotSearchAnimalArray:[],
      current :1 ,
      pageSize:10,
      total:0,
        rowData:{}
    }
  },
  methods:{
    loadData:function (){

    }
  },
  mounted() {
    httpUtil.getData('admin/animalList').then(res => {
      console.log(res)
      if (res.code == 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.hotAnimalArray.push(res.data[i])
        }
      }
    })
    httpUtil.getData('animalInfo/hotSearchAnimal').then(res => {
      if (res.code == 200) {
        for (let i = 0; i < res.data.length; i++) {
          this.hotSearchAnimalArray.push(res.data[i])
        }
      }
    })
  },
    approvalAnimal:function (animal) {
      httpUtil.putData("admin/approvalAnimal/"+animal.id).then(res =>{
          if (res.code==200){
              ElMessage({
                  message: '审核成功！',
                  type: 'success',
              })
              animal.state='1';
          }else {
              ElMessage.error("审核失败！")
          }
      })

    },
    reject:function (animal){
      httpUtil.putData("admin/rejectAnimal/"+animal.id).then(res =>{
          if (res.code==200){
              ElMessage({
                  message: '驳回成功！',
                  type: 'success',
              })
              animal.state='-1';
          }else {
              ElMessage.error("驳回失败！")
          }
      })
    }
}
</script>0

<style scoped>

</style>