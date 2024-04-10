<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in carousel" :key="item">
      <div v-if="item.index === 'adopterRule'" @click="adopterFlag = true">
        <img class="carousel-img" src="../../../assert/images/adopterRule.jpg"/>
        <p class="carousel-p"> {{ item.name }}</p>
      </div>
      <div v-if="item.index === 'findRule'" @click="findFlag = true">
        <img class="carousel-img" src="../../../assert/images/findRule.jpg"/>
        <p class="carousel-p"> {{ item.name }}</p>
      </div>
      <div v-if="item.index === 'downloadFile'" @click="downFlag = true">
        <img class="carousel-img-downFile" src="../../../assert/images/downFile.jpg"/>
        <p class="carousel-p-downFile"> {{ item.name }}</p>
      </div>
    </el-carousel-item>
  </el-carousel>

  <el-dialog v-model="adopterFlag" width="1000px">
    <adopterRule></adopterRule>
  </el-dialog>
  <el-dialog v-model="findFlag" width="1000px">
    <findRule></findRule>
  </el-dialog>
  <el-dialog v-model="downFlag" width="1000px">
    <downloadFile></downloadFile>
  </el-dialog>
</template>


<script setup>
import adopterRule from "./rule/adopterRule.vue";
import findRule from "./rule/findRule.vue";
import downloadFile from "./rule/downFile.vue";
import {ref} from 'vue'

const carousel = ref([
  {
    "index": "adopterRule",
    "name": "领养须知"
  },
  {
    "index": "findRule",
    "name": "送养须知"
  },
  {
    "index": "downloadFile",
    "name": "领养协议"
  }
]);

const adopterFlag = ref(false);
const findFlag = ref(false);
const downFlag = ref(false);
</script>

<style scoped>
.carousel-img {
  float: left;
}

.carousel-p {
  position: absolute;
  top: 120px;
  left: 100px;
  font-size: 56px;
  font-weight: bolder;
  color: white;

}

.carousel-p-downFile {
  position: absolute;
  top: 120px;
  left: 550px;
  font-size: 56px;
  font-weight: bolder;
  color: white;
}
</style>