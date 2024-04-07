<template>

  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

  <div>
    <h1>热门领养</h1>
    <div class="home-content">
      <div class="pet-content" v-for="item in 8">
        <div class="pet-image">
          image
        </div>
        <div class="pet-info">
          <div>
            name
          </div>
          <div>
            <el-tag type="danger">已绝育</el-tag>
            <el-tag type="danger">已免疫</el-tag>
            <el-tag type="danger">已驱虫</el-tag>
          </div>
          <div>address</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1>同城迷失的小精灵</h1>
    <div class="home-content">
      <div class="pet-content" v-for="item in 8">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'home',
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home-content{
  margin-right: 100px;
  margin-left: 10%;
  width: 1600px;
  height: 900px;
}
.pet-content{
  float: left;
  height: 400px;
  width: 320px;
  margin-left: 60px;
  margin-top: 10px;
  background: rgba(0,0,0,0.1);
  border-radius: 1%;
}
.pet-image{
  height: 300px;
  width: 320px;
  background: rgba(0,0,0,0.1);
  box-shadow: 0 4px 0 rgba(0,0,0,0.1);
}
.pet-info{
  height: 100px;
  width: 320px;
}
</style>