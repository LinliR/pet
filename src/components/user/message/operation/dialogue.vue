<template>
  <div class="dia">
    <div class="dia-info"  v-for="item in 15">
      <div v-if="item % 2 === 0">
        <img src="" style="background: rgba(0,0,0,0.1);width: 50px;height:50px;float: left" />
        <div style="float: left;">
          <div>
            用户名
          </div>
          <div style="margin-left: 20px;">
            消息消息消息消息消息消息
          </div>
        </div>
      </div>
      <div v-if="item % 2 !== 0">
        <div style="float:left;">
          <div style="width: 880px;text-align: right">
            用户名sadasd
          </div>
          <div style="width: 860px;text-align: right;margin-right: 20px;">
            消息消息消息消息消息消息dasdasdsds
          </div>
        </div>
        <img src="" style="background: rgba(0,0,0,0.1);width: 50px;height:50px;float: right" />
      </div>

    </div>
  </div>
  <el-card class="message">
    dasds
  </el-card>

</template>

<script>
export default {
  name: 'collection',
}
</script>

<style scoped>
.dia{
  height: 500px;
  overflow-y: scroll;
}
.dia-info{
  height: 54px;
  width: 80%;
  margin-left: 30px;
  margin-top: 10px;
  background: rgba(0,0,0,0.1);
  float: left;
}
.message{
  height: 198px;
}
</style>