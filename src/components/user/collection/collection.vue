<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>我的宠物</h1>
      <el-card class="pet-content" v-for="animal in hotAnimalArray" :key="animal.id" @click="petInfo(animal)">
        <template #header>
          {{ animal.name }}
          <div v-if="animal.animalHealthInfo==null" style="display: inline-block;float: right">
            <el-tag type="danger">暂无健康信息</el-tag>
          </div>
          <div v-else-if="animal.animalHealthInfo!=null" style="display: inline-block;float: right">
            <el-tag v-if="animal.animalHealthInfo.sterilization=='False'" type="danger">未绝育</el-tag>
            <el-tag v-if="animal.animalHealthInfo.sterilization=='True'" type="success">已绝育</el-tag>
            <el-tag v-if="animal.animalHealthInfo.immune=='False'" type="danger">未免疫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.immune=='True'" type="success">已免疫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.desinsectization=='False'" type="danger">未驱虫</el-tag>
            <el-tag v-if="animal.animalHealthInfo.desinsectization=='True'" type="success">已驱虫</el-tag>
          </div>
        </template>
        <img :src="animal.animalImgList[0].url" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ animal.province }}{{ animal.city }}</p>
      </el-card>

      <h1 style="margin-top: 30px">我的遗宠</h1>
      <el-card class="pet-content" v-for="findData in hotSearchAnimalArray" :key="findData.id"
               @click="petInfo(findData)">
        <template #header>
          {{ findData.name }}
          <div style="display: inline-block;float: right">
            <div class="tag">
              <el-tag type="primary">RMB:{{ findData.reward }}</el-tag>
            </div>
          </div>
        </template>
        <img :src="findData.imgSrc" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ findData.province }}{{ findData.city }}</p>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<script>
import httpUtil from "@/http/httpUtil.js";

export default {
  data(){
    return{
      hotAnimalArray:[],
      hotSearchAnimalArray:[]
    }
  },
  mounted() {
    httpUtil.getData('animalInfo/hotAnimal').then(res => {
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
  }
}
</script>

<style scoped>

</style>