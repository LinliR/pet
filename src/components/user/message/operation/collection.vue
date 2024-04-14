<template>
  <div class="review" >
    <div class="review-info" v-for="item in 15">
      <img src="" style="background: rgba(0,0,0,0.1);width: 50px;height:50px;float: left" />
      <div style="float: left;">
        <div>
          userName
        </div>
        <div style="margin-left: 50px;">
          收藏了 xxx 宠物
        </div>
      </div>
      <img src="" style="background: rgba(0,0,0,0.1);width: 50px;height:50px;float: right" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'collection',
}
</script>

<style scoped>
.review{
  height: 300px;
}
.review-info{
  height: 54px;
  width: 80%;
  margin-left: 30px;
  margin-top: 10px;
  background: rgba(0,0,0,0.1);
  float: left;
}
</style>