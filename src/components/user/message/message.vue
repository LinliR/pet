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
      <div v-if="dialogueFlag">
        <dialogue></dialogue>
      </div>
    </div>

  </div>
</template>

<script>
import review from "./operation/review.vue";
import Collection from "./operation/collection.vue";
import Dialogue from "@/components/user/message/operation/dialogue.vue";

export default {
  components: {
    Dialogue,
    Collection,
    review,
  },
  data: function () {
    return {
      nav :[
        {
          name:'宠物相关评论',
          router:'review'
        },
        {
          name:'宠物相关收藏',
          router:'collection'
        },
        {
          name:'消息对话',
          router:'dialogue'
        }
      ],
      reviewFlag :false,
      collectionFlag:false,
      dialogueFlag:false,
    }
  },
  methods:{
    showView:function (item) {
      console.log(item)
      this.reviewFlag = false;
      this.collectionFlag = false;
      this.dialogueFlag = false
      switch (item.router) {
        case 'review':
          this.reviewFlag = true;
          break
        case 'collection':
          this.collectionFlag = true;
          break
        case 'dialogue' :
          this.dialogueFlag = true;
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
  background: rgba(0, 0, 0, 0.1);
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