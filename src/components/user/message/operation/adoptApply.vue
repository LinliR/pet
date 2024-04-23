<template>
  <div class="review">
    <el-card class="review-info" v-for="item in adoptApplyList">
      <div class="block" style="float: left;">
        <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </div>
      <div style="float: left;margin-left: 30px;">
        <div>
          {{ item.applyName }}
        </div>
        <div style="margin-left: 50px;">
          申请了 ： {{ item.animalName }} 宠物收养请求
        </div>
      </div>
      <div style="float: right;">
        <el-button v-if="item.applyState === 'Applying'" type="success" @click="agreeAdopt(item)">同意</el-button>
        <el-button v-if="item.applyState === 'Applying'" type="danger" @click="reject(item)">拒绝</el-button>
        <el-button v-if="item.applyState === 'OTHER_PASS'" type="info" style="cursor: default">已同意其他人收养
        </el-button>
        <el-button v-if="item.applyState === 'Pass'" type="info" style="cursor: default">已同意</el-button>
        <el-button v-if="item.applyState === 'REJECT'" type="info">已拒绝</el-button>
      </div>
    </el-card>
  </div>

</template>

<script>
import httpUtil from "@/http/httpUtil.js";
import {Burger} from "@element-plus/icons-vue";

export default {
  name: 'adoptApply',
  components: {Burger},
  data: function () {
    return {
      adoptApplyList: []
    }
  },
  methods: {
    agreeAdopt: function (adoptApply) {
      console.log(adoptApply);
      let applyId = adoptApply.applyId;
      let animalId = adoptApply.animalId;

      let url = '/animalAdoption/agreeAdopt/' + applyId + "/" + animalId;
      httpUtil.get(url).then(res => {
        if (res.code == 200) {
          this.getLoad();
        }
      })
    },
    reject: function (adoptApply) {
      console.log(adoptApply);
      let applyId = adoptApply.applyId;
      let animalId = adoptApply.animalId;

      let url = '/animalAdoption/reject/' + applyId + "/" + animalId;
      httpUtil.get(url).then(res => {
        if (res.code == 200) {
          this.getLoad();
        }
      })
    },
    getLoad: function () {
      let url = "/animalAdoption/getAdoptApplyList";
      httpUtil.get(url).then(res => {
        if (res.code == 200) {
          this.adoptApplyList = res.data;
        }
      })
    }
  },
  created() {
    this.getLoad();
  }
}
</script>

<style scoped>
.review {
  height: 300px;
}

.review-info {
  height: 80px;
  width: 95%;
  margin-left: 30px;
  margin-top: 10px;
  float: left;
}
</style>