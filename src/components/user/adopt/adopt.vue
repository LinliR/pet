<script setup>

</script>

<template>
  <div class="condition">
    <div class="condition-content">
      <div class="condition-block">
        <div>
          <div class="condition-content-left">
            地区
          </div>

          <div class="condition-content-right">
            <a class="condition-province" v-for="item in provinces">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="condition-block">
        <div class="condition-content-left">
          星球
        </div>

        <div class="condition-content-right">
          <a class="condition-province" v-for="item in petTypes">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="condition-block">
        <div class="condition-content-left">
          性别
        </div>

        <div class="condition-content-right">
          <a class="condition-province" v-for="item in sexs">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="condition-block">
        <div class="condition-content-left">
          年龄
        </div>

        <div class="condition-content-right">
          <el-input class="age-input" v-model="age"/>
          <span class="age-span"> 岁 </span>
        </div>
      </div>
    </div>
  </div>

  <div class="context-image common-layout">
    <el-container>
      <el-main  class="context-main">
        <div>
          {{hot_image_url}}
        </div>
      </el-main>
      <el-aside class="select-aside">
        <div class="select-image" v-for="item in hot_image" :key="item" @click="hotImageChange(item)">
          {{item.name}}
        </div>
      </el-aside>
    </el-container>
  </div>

  <div class="home-content">
    <div class="hot-adopt" v-for="item in 8">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "adopt",
  data: function () {
    return {
      provinces: [
        {
          name: "广东"
        },
        {
          name: "广西"
        },
        {
          name: "福建"
        }
      ],
      petTypes: [
        {
          name: "喵星人"
        },
        {
          name: "汪星人"
        },
        {
          name: "鸟儿"
        }
      ],
      sexs: [
        {
          name: "男"
        },
        {
          name: "女"
        }
      ],
      age: 2,
      hot_image_url:"1",
      hot_image :[
        {
          name:"喵喵1"
        },
        {
          name:"喵喵2"
        },
        {
          name:"喵喵3"
        },
        {
          name:"喵喵4"
        },
        {
          name:"喵喵5"
        },
      ]
    }
  },
  methods:{
    hotImageChange:function (obj){
      this.hot_image_url = obj.name
    }
  }
}
</script>

<style scoped>
.condition {
  height: 240px;
  width: 100%;
  line-height: 240px;
  background: rgba(0, 0, 0, 0.1);
}

.condition-content {
  margin-left: 10%;
  margin-right: 10%;
  width: 1920px;
  height: 240px;
  background: rgba(0, 0, 0, 0.1);
}

.condition-block {
  width: 300px;
  height: 240px;
  float: left;
  margin-left: 4%;
  background: rgba(0, 0, 0, 0.1);
}

.condition-content-left {
  display: inline-block;
  width: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
}

.condition-province {
  margin-left: 10px;
}

.age-input {
  height: 100px;
  width: 200px;
  margin-left: 10px;
}

.age-span {
  margin-left: 10px;
}

.condition-content-right {
  display: inline-block;
  width: 250px;
  background: rgba(0, 0, 0, 0.2);
}

.context-image{
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  width: 1500px;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
}
.context-main{
  width: 80%;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
}
.select-aside{
  width: 20%;
}
.select-image{
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
}

.home-content{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
  float: left;
  width: 1500px;
  height: 900px;
}
.hot-adopt{
  float: left;
  height: 400px;
  width: 280px;
  margin-left: 90px;
  margin-top: 10px;
  background: #475669;
}
</style>
