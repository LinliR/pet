<template>
  <el-row style="margin-top: 30px;">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card class="pet-content" style="height: 340px" v-for="animal in animalList" :key="animal.id" @click="petInfo(animal)">
        <template #header>
          {{ animal.name }}
          <div v-if="animal.animalHealthInfo==null" style="display: inline-block;float: right">
            <el-tag type="danger">暂无健康信息</el-tag>
          </div>
            <div v-if=" animal.animalHealthInfo !=null" style="display: inline-block;float: right">
                <el-tag class="ml5" v-if="animal.animalHealthInfo.sterilization=='False'"
                        type="danger">未绝育
                </el-tag>
                <el-tag class="ml5" v-if="animal.animalHealthInfo.sterilization=='True'"
                        type="success">已绝育
                </el-tag>
                <el-tag class="ml5" v-if="animal.animalHealthInfo.immune=='False'" type="danger">
                    未免疫
                </el-tag>
                <el-tag class="ml5" v-if="animal.animalHealthInfo.immune=='True'" type="success">
                    已免疫
                </el-tag>
                <el-tag class="ml5" v-if="animal.animalHealthInfo.desinsectization=='False'"
                        type="danger">未驱虫
                </el-tag>
                <el-tag class="ml5" v-if="animal.animalHealthInfo.desinsectization=='True'"
                        type="success">已驱虫
                </el-tag>
            </div>
        </template>
        <el-carousel height="180px" width="320px" >
          <el-carousel-item v-for="item in animal.animalImgList" :key="item">
            <h3 class="small justify-center" text="2xl">
              <el-image  :src="item.url?item.url :'http://localhost:8080/defaultImg.jpg'"  >
                <template #error>
                  <el-image  style="height: 200px;width:280px"  src='http://localhost:8080/defaultImg.jpg'></el-image>
                </template>
              </el-image>
            </h3>
          </el-carousel-item>
        </el-carousel>
<!--        <img :src="animal.animalImgList ? '':animal.animalImgList[0].url" height="180px" width="320px"/>-->
        <template #footer>
            <div style="float: left">
                <el-button v-if="animal.animalState=='send'" disabled type="success">送养</el-button>
                <el-button v-if="animal.animalState!='send'" disabled type="success">寻宠</el-button>
            </div>
          <div style="float: right">
              <el-button v-if="animal.state=='1' || animal.animalState!='send'" disabled type="success">已发布</el-button>
              <el-button v-if="animal.state=='-1' && animal.animalState=='send'" @click="reject(animal)" type="danger">已驳回</el-button>
              <el-button v-if="animal.state=='0' && animal.animalState=='send'" @click="approvalAnimal(animal)" type="success">审核</el-button>
            <el-button v-if="animal.state=='0' && animal.animalState=='send'" @click="reject(animal)" type="danger">驳回</el-button>

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
      animalList :[],
      current :1 ,
      pageSize:9,
      total:0,
        rowData:{}
    }
  },
  methods:{
    loadData:function (){
        this.animalList=[];
        httpUtil.getData('admin/animalList/'+this.current+"/"+this.pageSize).then(res => {
            if (res.code == 200) {
                for (let i = 0; i < res.data.records.length; i++) {
                    this.total=res.data.total;
                    this.current=res.data.current;
                    this.pageSize=res.data.size;
                    this.animalList.push(res.data.records[i])
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
                  this.loadData();
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
                  this.loadData();
              }else {
                  ElMessage.error("驳回失败！")
              }
          })
      },
      petInfo:function (animal) {

      }
  },
  mounted() {
      this.loadData();
  }
}
</script>0

<style scoped>

</style>