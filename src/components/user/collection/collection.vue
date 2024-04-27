<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>收藏宠物</h1>
      <el-card class="pet-content" v-for="animal in collectionSendList" :key="animal.id" @click="petInfo(animal)">
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
      <div style="margin-top: 30px;width: 100%">
        <el-pagination style="margin-left: 40%" @current-change="getMyCollectionSendPet"
                       v-model:current-page="currentSend" :pageCount="pageCountSend" layout="prev, pager, next"
                       :total="totalSend"/>
      </div>

      <h1 style="margin-top: 30px">收藏寻宠</h1>
      <el-card class="pet-content" v-for="findData in collectionSearchList" :key="findData.id"
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
      <div style="margin-top: 30px;width: 100%">
        <el-pagination style="margin-left: 40%" @current-change="getMyCollectionSearchPet"
                       v-model:current-page="currentSearch" :pageCount="pageCountSearch" layout="prev, pager, next"
                       :total="totalSearch"/>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<script>
import httpUtil from "@/http/httpUtil.js";

export default {
  data() {
    return {
      collectionSendList: [],
      collectionSearchList: [],
      currentSend: 1,
      pageSendSize: 4,
      totalSend: 0,
      pageCountSend: 1,
      currentSearch: 1,
      pageSearchSize: 10,
      totalSearch: 0,
      pageCountSearch: 1,
    }
  },
  methods: {
    getMyCollectionSendPet() {
      let url = 'collecanimals/getCollectionList/send/' + this.currentSend + '/' + this.pageSendSize;
      httpUtil.getData(url).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.collectionSendList = res.data.records;
          this.pageCountSend = res.data.pages;
        }
      })
    },
    getMyCollectionSearchPet() {
      let url = 'collecanimals/getCollectionList/search/' + this.currentSearch + '/' + this.pageSearchSize;
      httpUtil.getData(url).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.collectionSearchList = res.data.records;
          this.pageCountSearch = res.data.pages;
        }
      })
    },
    petInfo: function (obj) {
      let id = obj.id
      console.log(obj)
      this.$router.push({
        path: '/userPet',
        query: {id: id}
      })
    }
  },
  mounted() {
    this.getMyCollectionSendPet();
    this.getMyCollectionSearchPet();
  }
}
</script>

<style scoped>

</style>