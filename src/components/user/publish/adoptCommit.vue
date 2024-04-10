<script setup>

</script>

<template>
  <div class="content-opera">
    <div class="content-card radius" style="height: 400px;">
      <div class="content-left">
        <div class="operation">
          <div class="back" @click="backFun">
            <el-icon class="back-icon">
              <Back/>
            </el-icon>
          </div>
          <img src="../../../assert/images/adopterForm.jpg" class="operation-img">
          <div class="operation-font">发布宠物信息</div>
        </div>

      </div>
      <div class="content-right">
        <adopt-form></adopt-form>
      </div>
    </div>
  </div>
</template>

<script>
import AdoptForm from "@/components/user/publish/formFile/adoptForm.vue";

export default {
  name: "adoptCommit",
  components: {
    AdoptForm,
  },
  methods: {
    backFun: function () {
      this.$router.push({path: "publish"});
    }
  }
}
</script>

<style scoped>
.content-opera {
  margin-left: 10%;
}

.content-card {
  width: 1500px;
  height: 700px;
  position: relative;
}

.content-left {
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  width: 500px;
  height: 700px;
  background: #FFF1DA;
  float: left;
}

.content-right {
  width: 900px;
  height: 617px;
  display: inline-block;
  position: relative;
  background: white;
  right: 100px;
  top: 40px;
  border-radius: 3%;
  box-shadow: 0 0 rgba(0, 0, 0, 0.1), 0em 0.2em rgba(0, 0, 0, 0.1);
}

.back {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  color: #000;
  text-align: center;
  line-height: 56px;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
}

.operation {
  height: 300px;
  display: inline-block;
  width: 450px;
  color: #fff;
  margin-top: 200px;
  margin-left: 40px;
}

.operation-img {
  width: 400px;
  height: 300px;
  float: left;
}

.operation-font {
  display: inline-block;
  position: relative;
  //top: 250px;
  left: 120px;
  //right: 220px;
  font-size: 24px;
  color: black;
}
</style>