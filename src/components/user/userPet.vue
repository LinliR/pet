<template>
  <div style="margin-top: 20px">
    <div class="content">
      <el-card class="pet-content">
        <template #header>
          <div style="margin-top: 20px;margin-left: 15px;"><h1>宠物名：{{pet.name}}</h1></div>
        </template>
        <div class="content-left">
          <img src="../../assert/images/findForm.png" class="content-img">
        </div>
        <div class="content-center">
          <table>
            <tr>
              <td>年龄</td>
              <td>{{ pet.age }} 岁</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>性别</td>
              <td>
                {{ pet.gender === 'man' ? '男' : '女' }}
              </td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>品种</td>
              <td>{{ pet.species }}</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>地区:</td>
              <td>{{ pet.province }} - {{pet.city}}</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>领养后需要打卡:</td>
              <td>{{ pet.needCardNum }}</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>健康信息:</td>
              <td>
                <div v-if="pet.animalHealthInfo==null" style="display: inline-block;float: right">
                  <el-tag type="danger">暂无健康信息</el-tag>
                </div>
                <div v-else-if="pet.animalHealthInfo!=null" style="display: inline-block;float: right">
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.sterilization=='False'" type="danger">未绝育</el-tag>
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.sterilization=='True'" type="success">已绝育</el-tag>
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.immune=='False'" type="danger">未免疫</el-tag>
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.immune=='True'" type="success">已免疫</el-tag>
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.desinsectization=='False'" type="danger">未驱虫</el-tag>
                  <el-tag class="ml5" v-if="pet.animalHealthInfo.desinsectization=='True'" type="success">已驱虫</el-tag>
                </div>
              </td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td>宠物描述:</td>
              <td>{{ pet.description }}</td>
            </tr>
          </table>
        </div>
        <div class="content-right">
          <table>
            <tr>
              <td class="opera-button">收藏</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td class="opera-button">收养</td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr>
              <td class="opera-button">与主人对话</td>
            </tr>
          </table>
        </div>
      </el-card>



    </div>
  </div>

</template>

<script>
import axiosInstance from '@/http/httpUtil.js'

export default {
  data: function() {
    return {
      pet_id: 0,
      pet: {}
    }
  },
  created() {
    let pet = this.$route.query
    this.pet_id = pet.id
    let url = 'animalInfo' + '/get/' + pet.id
    axiosInstance.get(url).then(res => {
      if (res.code === 200) {
        this.pet = res.data;
      }
      console.log(res)
    })
  }
}
</script>

<style scoped>
.ml5{
  margin-left: 5px;
}
.content-left {
  width: 500px;
  height: 600px;
  display: inline-block;
}

.content-img {
  width: 500px;
  height: 500px;
}

.pet-content{
  height: 800px;
}

.content-center {
  width: 500px;
  height: 600px;
  background: rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-left: 50px;
}
.content-center table{
  margin-top: 30px;
  margin-left: 50px;
}


.content-right {
  width: 250px;
  height: 600px;
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin-left: 50px;
}
.opera-button{
  cursor: pointer;
}
</style>
