<template>
  <carousel></carousel>


    <div class="home-content">
      <h1>热门领养</h1>
      <el-card class="pet-content" v-for="adoptData in adoptList" :key="adoptData.id">
        <template #header>
          {{adoptData.name}}
          <div style="display: inline-block;float: right">
            <div class="tag"  v-for="degree in adoptData.degrees" :key="degree.index">
              <el-tag type="danger" v-if="degree.index === 1">{{ degree.name }}</el-tag>
              <el-tag type="danger" v-if="degree.index === 2">{{ degree.name }}</el-tag>
              <el-tag type="primary" v-if="degree.index === 3">{{ degree.name }}</el-tag>
            </div>
          </div>
        </template>
        <img :src="adoptData.imgSrc" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ adoptData.address }}</p>
      </el-card>


      <h1 style="margin-top: 30px">同城迷失的小精灵</h1>
      <el-card class="pet-content" v-for="findData in findList" :key="findData.id">
        <template #header>
          {{findData.name}}
          <div style="display: inline-block;float: right">
            <div class="tag"  v-for="degree in findData.degrees" :key="degree.index">
              <el-tag type="danger" v-if="degree.index === 1">{{ degree.name }}</el-tag>
              <el-tag type="danger" v-if="degree.index === 2">{{ degree.name }}</el-tag>
              <el-tag type="primary" v-if="degree.index === 3">{{ degree.name }}</el-tag>
            </div>
          </div>
        </template>
        <img :src="findData.imgSrc" height="200px" width="320px"/>
        <p style="margin-top: 6px;float: right">{{ findData.address }}</p>
      </el-card>
    </div>
</template>

<script setup>
import {ref} from  'vue';
import carousel from './carousel.vue';

const adoptList = ref([
  {
    id : '1',
    name : "旺旺",
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
    imgSrc : "/src/assert/images/1.jpg",
    address : "甘肃省 兰州市 城关区"
  },
  {
    id : '2',
    name : "支竹",
    degrees : [
      {
        index : 2,
        name : "已绝育"
      },
      {
        index : 3,
        name : "已免疫"
      },
    ],
    imgSrc : "/src/assert/images/2.jpg",
    address : "北京市 朝阳"
  },
  {
    id : '3',
    name : "懒虫",
    degrees : [
    ],
    imgSrc : "/src/assert/images/3.jpg",
    address : "广东省 深圳市 南山区"
  },
  {
    id : '4',
    name : "泰泰",
    degrees : [
      {
        index : 3,
        name : "已免疫"
      },
    ],
    imgSrc : "/src/assert/images/4.jpg",
    address : "上海市 浦东区<"
  }
]);
const findList = ref([
  {
    id : '1',
    name : "旺旺",
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
    imgSrc : "/src/assert/images/5.jpeg",
    address : "甘肃省 兰州市 城关区"
  },
  {
    id : '2',
    name : "支竹",
    degrees : [
      {
        index : 2,
        name : "已绝育"
      },
      {
        index : 3,
        name : "已免疫"
      },
    ],
    imgSrc : "/src/assert/images/6.jpg",
    address : "北京市 朝阳"
  },
  {
    id : '3',
    name : "懒虫",
    degrees : [
    ],
    imgSrc : "/src/assert/images/7.jpeg",
    address : "广东省 深圳市 南山区"
  },
  {
    id : '4',
    name : "泰泰",
    degrees : [
      {
        index : 3,
        name : "已免疫"
      },
    ],
    imgSrc : "/src/assert/images/8.jpeg",
    address : "上海市 浦东区<"
  }
]);
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.home-content {
  margin-right: 100px;
  margin-left: 10%;
  width: 1600px;
  height: 900px;
}

.pet-content {
  display: inline-block;
  height: 320px;
  width: 320px;
  margin-left: 60px;
  margin-top: 10px;
  cursor: pointer;
}
.tag{
  margin-left: 5px;
  float: left;
}
</style>