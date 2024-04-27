<template>
  <div class="content">
    <div class="message-left">
      <el-menu style="height: 700px;"
               default-active="2"
               class="el-menu-vertical-demo"
      >
        <el-menu-item v-for="item in nav" @click="showView(item)">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="message-right">
      <div v-if="reviewFlag">
        <review></review>
      </div>
      <div v-if="collectionFlag">
        <collection></collection>
      </div>
      <div v-if="adoptApplyFlag">
        <adoptApply></adoptApply>
      </div>
    </div>

  </div>
</template>

<script>
import review from "./operation/review.vue";
import Collection from "./operation/collection.vue";
import adoptApply from '@/components/user/message/operation/adoptApply.vue'

export default {
  components: {
    Collection,
    review,
    adoptApply
  },
  data: function () {
    return {
      nav: [
        {
          name: '宠物相关评论',
          router: 'review'
        },
        {
          name: '宠物相关收藏',
          router: 'collection'
        },
        {
          name: '领养申请',
          router: 'adoptApply'
        }
      ],
      reviewFlag: false,
      collectionFlag: false,
      adoptApplyFlag: false,
    }
  },
  methods: {
    showView: function (item) {
      this.reviewFlag = false;
      this.collectionFlag = false;
      this.adoptApplyFlag = false;
      switch (item.router) {
        case 'review':
          this.reviewFlag = true;
          break
        case 'collection':
          this.collectionFlag = true;
          break
        case 'adoptApply':
          this.adoptApplyFlag = true;
          break
      }
    }
  }
}
</script>

<style scoped>
.content {
  width: 1500px;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.message-left {
  width: 300px;
  display: inline-block;
  float: left;
}

.message-right {
  width: 1200px;
  display: inline-block;
  overflow-y: scroll;
  height: 700px;
}
</style>