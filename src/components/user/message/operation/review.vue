<template>
  <div class="review">
    <el-card class="review-info" v-for="item in reviewList">
      <div class="block" style="float: left;">
        <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      </div>
      <div style="float: left;margin-left: 30px;">
        <div>
          {{ item.username }}
        </div>
        <div style="margin-left: 50px;">
          评论了：{{ item.comment }}
        </div>
      </div>
      <img :src="item.animalImgUrl" style="background: rgba(0,0,0,0.1);width: 50px;height:50px;float: right"/>
    </el-card>
  </div>

</template>

<script>
import httpUtil from "@/http/httpUtil.js";

export default {
  name: 'review',
  data: function () {
    return {
      reviewList: []
    }
  },
  created() {
    let url = "/comment/getCommentList";
    httpUtil.get(url).then(res => {
      if (res.code == 200) {
        this.reviewList = res.data;
      }
    })
  }
}
</script>

<style scoped>
.review {
  height: 300px;
}

.review-info {
  height: 80px;
  width: 90%;
  margin-left: 30px;
  margin-top: 10px;
  float: left;
}
</style>