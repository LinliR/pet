<template>
  <div class="content-opera">
    <div class="operation" @click="adoptClickFun">
      送养
    </div>
    <div class="operation" @click="findClickFun">
      寻宠
    </div>
  </div>
  <div class="content from-div">
    <div v-if="adoptFormFlag === false && findFlag === false">
      发布你感兴趣的内容...
    </div>
    <div v-if="adoptFormFlag === true">
      <adopt-form></adopt-form>
    </div>
    <div v-if="findFlag === true">
      <find-from></find-from>
    </div>
  </div>
</template>

<script>
import AdoptForm from "@/components/user/publish/formFile/adoptForm.vue";
import FindFrom from "@/components/user/publish/formFile/findFrom.vue";

export default {
  components: {
    FindFrom,
    AdoptForm,
  },
  data:function (){
    return{
      adoptFormFlag : false,
      findFlag : false,
    }
  },
  methods:{
    adoptClickFun : function () {
      this.adoptFormFlag = true;
      this.findFlag = false;
    },
    findClickFun : function () {
      this.findFlag = true;
      this.adoptFormFlag = false;
    }
  },
}
</script>

<style scoped>
  .content-opera{
    text-align: center;
  }
  .operation{
    height: 300px;
    display: inline-block;
    width: 400px;
    background: #000;
    color: #fff;
    margin-top: 60px;
    margin-left: 100px;
  }
  .from-div{
    text-align: center;
    width: 1600px;
    margin-top: 50px;
    height: 600px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
