<template>
  <el-row>
    <el-col :span="2"></el-col>
    <!--宠物部分-->
    <el-col :span="20">
      <el-card class="pet-content">
        <template #header>
          <div style="margin-top: 20px;margin-left: 15px;"><h1>宠物名：{{ pet.name }}</h1></div>
        </template>
        <el-row>
          <!-- 图片 -->
          <el-col :span="9">
            <div v-for="item in pet.animalImgList">
              <img :src="item.url" class="content-img">
              <!--                <div class="block text-center">-->
              <!--                  <span class="demonstration">Motion blur the switch (default)</span>-->
              <!--                  <el-carousel height="200px" motion-blur>-->
              <!--                    <el-carousel-item v-for="item in pet.animalImgList" :key="item">-->
              <!--                      <h3 class="small justify-center" text="2xl">{{ item.url }}</h3>-->
              <!--                    </el-carousel-item>-->
              <!--                  </el-carousel>-->
              <!--                </div>-->
            </div>
          </el-col>
          <!-- 宠物信息 -->
          <el-col :span="9">
            <table class="content-center">
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
                <td>{{ pet.province }} - {{ pet.city }}</td>
              </tr>
              <tr style="height: 20px"></tr>
              <tr v-if="pet.animalState ==='search'">
                <el-tag type="primary">RMB:{{ pet.reward }}</el-tag>
              </tr>
              <tr v-if="pet.animalState ==='send'">
                <td>领养后需要打卡:</td>
                <td>{{ pet.needCardNum }}</td>
              </tr>
              <tr style="height: 20px"></tr>
              <tr v-if="pet.animalState ==='send'">
                <td>健康信息:</td>
                <td>
                  <div v-if="pet.animalHealthInfo==null" style="display: inline-block;float: right">
                    <el-tag type="danger">暂无健康信息</el-tag>
                  </div>
                  <div v-else-if="pet.animalHealthInfo!=null" style="display: inline-block;float: right">
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.sterilization=='False'"
                            type="danger">未绝育
                    </el-tag>
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.sterilization=='True'"
                            type="success">已绝育
                    </el-tag>
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.immune=='False'" type="danger">
                      未免疫
                    </el-tag>
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.immune=='True'" type="success">
                      已免疫
                    </el-tag>
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.desinsectization=='False'"
                            type="danger">未驱虫
                    </el-tag>
                    <el-tag class="ml5" v-if="pet.animalHealthInfo.desinsectization=='True'"
                            type="success">已驱虫
                    </el-tag>
                  </div>
                </td>
              </tr>
              <tr style="height: 20px"></tr>
              <tr>
                <td>宠物描述:</td>
                <td>{{ pet.description }}</td>
              </tr>
            </table>
          </el-col>
          <!--操作部分-->
          <el-col :span="6">
            <el-card style="text-align: center" shadow="never">
              <table>
                <tr>
                  <td>
                    <p class="opera-button" v-if="!isCollection" @click="addCollection">
                      <el-icon>
                        <Star/>
                      </el-icon>
                      收藏
                    </p>
                    <p class="opera-button" v-if="isCollection" @click="deleteCollection">
                      <el-icon>
                        <StarFilled/>
                      </el-icon>
                      取消收藏
                    </p>
                  </td>
                </tr>
                <tr style="height: 20px"></tr>
                <tr>
                  <td v-if="pet.animalState ==='send'">
                    <p class="opera-button" v-if="!isAdopt">
                      <el-icon>
                        <House/>
                      </el-icon>
                      收养
                    </p>
                    <p class="opera-button" v-if="isAdopt">
                      <el-icon>
                        <HomeFilled/>
                      </el-icon>
                      收养
                    </p>
                  </td>
                  <td v-if="pet.animalState ==='search'">
                    <p class="opera-button" v-if="!isAdopt">
                      <el-icon>
                        <House/>
                      </el-icon>
                      寻得宠物
                    </p>
                    <p class="opera-button" v-if="isAdopt">
                      <el-icon>
                        <HomeFilled/>
                      </el-icon>
                      消息勘误
                    </p>
                  </td>
                </tr>
                <tr style="height: 20px"></tr>
                <tr>
                  <td>
                    <p class="opera-button">
                      <el-icon>
                        <ChatSquare/>
                      </el-icon>
                      与主人对话
                    </p>
                  </td>
                </tr>
              </table>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

  <!-- 评论 -->
  <el-row style="margin-top: 20px">
    <el-col :span="1"></el-col>
    <el-col :span="22">
      <el-card style="margin-top: 30px;min-height: 300px">
        <div v-if="reviewList.length === 0">
          暂无评论信息
        </div>
        <el-card body-style="none" class="review" v-for="item in reviewList" :key="item.id" shadow="never">
          <div class="review-image-div" style="text-align: center">
            <div class="block">
              <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </div>
            <div>{{ item.username }}</div>
          </div>
          <div class="review-personReview">
            {{ item.comment }}
          </div>
        </el-card>


        <el-card style="margin-top: 20px;">
          <el-input type="textarea" placeholder="请输入你想说的话" v-model="comment.comment"></el-input>
          <el-button class="review-button" @click="addComment()" type="primary">发布评论</el-button>
        </el-card>

      </el-card>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>

</template>

<script>
import axiosInstance from '@/http/httpUtil.js'
import {ElMessage} from 'element-plus'


export default {
  data: function () {
    return {
      pet_id: 0,
      pet: {},
      isCollection: false,
      isAdopt: false,
      reviewList: [],
      comment: {}
    }
  },
  created() {
    let pet = this.$route.query.id
    let url = 'animalInfo' + '/get/' + pet
    axiosInstance.get(url).then(res => {
      if (res.code === 200) {
        this.pet = res.data
        let commentUrl = 'comment/getComment/' + res.data.id
        axiosInstance.getData(commentUrl).then(res => {
          if (res.code == 200) {
            this.reviewList = res.data
          }
        })
        let collectionUrl = 'collecanimals/getState/' + this.pet.id
        axiosInstance.get(collectionUrl).then(res => {
          if (res.code === 200) {
            this.isCollection = res.data
          }
        })
      }
    })


  },
  methods: {
    addComment: function () {
      let userId = localStorage.getItem('userId')
      if (!userId) {
        this.$router.push({name: 'user_login'})
        return
      }
      if (this.comment.comment == undefined || this.comment.comment.length == 0 || this.comment.comment.length > 50) {
        ElMessage.error('只能发表1-50个字的评论哦！')
        return false
      }
      let url = 'comment/addComment/' + this.comment.comment + '/' + this.pet.id
      axiosInstance.putData(url, {}).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: '评论已发布！',
            type: 'success'
          })
          this.reviewList.unshift({comment: this.comment.comment, username: localStorage.getItem('userName')})
          this.comment.comment = ''
        }
      })
    },
    addCollection: function () {
      let userId = localStorage.getItem('userId')
      let petId = this.pet.id
      let params = {
        userId: userId,
        animalId: petId
      }

      let url = 'collecanimals/add'
      axiosInstance.post(url, params).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: '收藏成功',
            type: 'success'
          })
          this.isCollection = true
        }
      })
    },
    deleteCollection: function () {
      let userId = localStorage.getItem('userId')
      let petId = this.pet.id
      let params = {
        userId: userId,
        animalId: petId
      }

      let url = 'collecanimals/cancel'
      axiosInstance.post(url, params).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: '取消收藏成功',
            type: 'success'
          })
          this.isCollection = false
        }
      })
    }
  }
}
</script>

<style scoped>
.ml5 {
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

.pet-content {
  height: 800px;
  width: 1500px;
}

.content-center {
  width: 500px;
  height: 600px;
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
}

.content-center table {
  margin-top: 30px;
  margin-left: 50px;
}


.content-right {
  width: 250px;
  height: 600px;
  display: inline-block;
  margin-left: 50px;
  text-align: left;
}

.opera-button {
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  text-align: left;
}

.opera-button:hover {
  cursor: pointer;
  color: white;
  background: #409EFF;
  padding: 5px;
  border-radius: 5%;
}

.review-button {
  margin-top: 10px;
  float: right;
}

.review {
  height: 120px;
  margin-top: 10px;
}

.review-image-div .review-image {
  background: #000;
  width: 50px;
  height: 50px;
  display: block;
}

.review-image-div {
  float: left;
}

.review-personReview {
  margin-left: 10px;
  float: left;
}
</style>
