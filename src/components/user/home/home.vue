<template>
  <carousel></carousel>


  <div>
    <h1>热门宠物</h1>
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
  </div>

  <div>
    <h1 style="margin-top: 30px">热门迷失的小精灵</h1>
    <el-card class="pet-content" v-for="findData in hotSearchAnimalArray" :key="findData.id" @click="petInfo(findData)">
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
  </div>
</template>

<script>
import carousel from './carousel.vue';
import {inject, onMounted, reactive} from 'vue';

export default {
  components: {
    carousel
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  data: function () {
    return {
      carousel: [
        {
          "index": "adopterRule",
          "name": "领养须知"
        },
        {
          "index": "findRule",
          "name": "寻宠须知"
        },
        {
          "index": "downloadFile",
          "name": "领养协议"
        }
      ]
    }
  },
  setup() {
    const axios = inject('axios'); // 注入axios实例
    const hotAnimalArray = reactive([]);
    const hotSearchAnimalArray = reactive([]);
    onMounted(
        () => {
          axios.getData('animalInfo/hotAnimal').then(res => {
            console.log(res)
            if (res.code == 200) {
              for (let i = 0; i < res.data.length; i++) {
                hotAnimalArray.push(res.data[i]);
              }
            }
            console.log(hotAnimalArray)
          });
          axios.getData('animalInfo/hotSearchAnimal').then(res => {
            if (res.code == 200) {
              for (let i = 0; i < res.data.length; i++) {
                hotSearchAnimalArray.push(res.data[i]);
              }
            }
          })
        }
    );

    return {
      hotAnimalArray,
      hotSearchAnimalArray
    };

  },
  methods:{
    petInfo:function(obj) {

      let id = obj.id;
      console.log(obj)
      this.$router.push({
        path:"/userPet",
        query:{id:id}
      });
    }
  }
};
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

.tag {
  margin-left: 5px;
  float: left;
}
</style>
