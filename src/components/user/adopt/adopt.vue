<template>
  <!-- 头部热图部分 -->
  <el-row gutter="20">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-row style="background: rgba(0,0,0,0.1);">
        <!-- 左边的图 -->
        <el-col :span="18">
          <el-main>
            <div>
              <img style="margin: 0px;width: 100%;height: 250px" :src=" hot_image_url" />
            </div>
          </el-main>
        </el-col>
        <!-- 右边的宠物名字 -->
        <el-col :span="6">
          <div class="select-image" v-for="item in hot_list" :key="item" @click="hotImageChange(item)">
            {{ item.name }}
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

  <div style="margin-top: 40px;"></div>

  <!--下面的分页信息-->
  <el-row gutter="30">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card>
        <template #header>
          <el-row>
            <el-col :span="6">
              <div style="float: left;">
                地区：
              </div>
              <div style="float: left;">
                <el-select
                  v-model="province"
                  placeholder="请选择省份"
                  size="large"
                  style="width: 200px"
                >
                  <el-option
                    v-for="item in provinces"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </div>
            </el-col>

            <el-col :span="6">
              <div style="float: left;">
                星球：
              </div>
              <div style="float: left;">
                <el-select
                  v-model="province"
                  placeholder="请选择宠物种类"
                  size="large"
                  style="width: 200px"
                >
                  <el-option
                    v-for="item in petTypes"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </div>
            </el-col>

            <el-col :span="6">
              <div style="float: left;">
                性别：
              </div>
              <div style="float: left;">
                <el-checkbox-group v-model="sexs" size="small">
                  <el-checkbox :label="sex.name" value="Value1" v-for="sex in sexs" :key="sex.name" border />
                </el-checkbox-group>
              </div>

            </el-col>

            <el-col :span="6">
              <div style="float: left;">
                年龄：
              </div>
              <div style="float: left;">
                <el-input style="width: 200px" />
              </div>
            </el-col>
          </el-row>
        </template>
        <div>
          <div v-for="animal in petList" :key="animal.id" @click="petInfo(animal)" class="pet-content">
            <el-card>
              <template #header>
                {{ animal.name }}
                <div v-if="animal.animalHealthInfo==null" style="display: inline-block;float: right">
                  <el-tag type="danger">暂无健康信息</el-tag>
                </div>
                <div v-else-if="animal.animalHealthInfo!=null" style="display: inline-block;float: right">
                  <el-tag v-if="animal.animalHealthInfo.sterilization=='False'" type="danger">未绝育</el-tag>
                  <el-tag v-if="animal.animalHealthInfo.sterilization=='True'" type="success">已绝育</el-tag>
                  <el-tag v-if="animal.animalHealthInfo.immune=='False'" type="danger">未免疫</el-tag>
                  <el-tag v-if="animal.animalHealthInfo.immune=='True'" type="success">已免疫</el-tag>
                  <el-tag v-if="animal.animalHealthInfo.desinsectization=='False'" type="danger">未驱虫</el-tag>
                  <el-tag v-if="animal.animalHealthInfo.desinsectization=='True'" type="success">已驱虫</el-tag>
                </div>
              </template>
              <img :src="animal.animalImgList[0] ? animal.animalImgList[0].url : ''" height="200px" width="320px" />
              <p style="margin-top: 6px;float: right">{{ animal.province }}{{ animal.city }}</p>
            </el-card>
          </div>

          <div></div>
        </div>

        <template #footer>
          <div style="margin-top: 30px;text-align: center;">
            <el-pagination background @current-change="getList" :pageCount="pageCount" v-model:current-page="current"
                           layout="prev, pager, next" :total="total" style="margin-left: 40%;" />
          </div>
        </template>
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>

</template>

<script>
import httpUtil from '@/http/httpUtil.js'


export default {
  name: 'adopt',
  data: function() {
    return {
      provinces: [
        '北京', '天津', '江西', '陕西', '山东', '甘肃', '河北', '山西', '河南', '青海', '湖北', '宁夏', '内蒙古', '辽宁', '吉林', '湖南', '广东', '广西', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '海南', '重庆', '四川', '贵州', '云南', '西藏', '新疆', '香港', '澳门', '台湾'
      ],
      province: '',
      petTypes: [
        {
          name: '喵星人'
        },
        {
          name: '汪星人'
        },
        {
          name: '鸟儿'
        }
      ],
      sexs:
        [
          {
            name: '男'
          },
          {
            name: '女'
          }
        ],
      age:
        2,
      hot_image_url:
        '1',
      hot_list: [],
      petList: [],
      current: 1,
      pageSize: 8,
      pageCount: 0,
      total: 100
    }
  },
  methods: {
    hotImageChange: function(obj) {
      this.hot_image_url = obj.url
    },
    getList: function() {
      let url = 'animalInfo/getSendAnimalInfoList/' + this.current + '/' + this.pageSize
      httpUtil.get(url).then(res => {
        if (res.code == 200) {
          let data = res.data.records
          this.total = res.data.total
          this.pageCount = res.data.pages
          this.petList = data
        }
      })
    },
    petInfo: function(obj) {
      let id = obj.id
      this.$router.push({
        path: '/userPet',
        query: { id: id }
      })
    }
  },
  mounted() {
    this.getList()
    httpUtil.get('animalInfo/hotAnimal').then(res => {
      if (res.code == 200) {
        let data = res.data
        if (data.length > 3) {
          data = data.slice(0, 3)
        }
        this.hot_image_url = data[0].animalImgList[0] ? data[0].animalImgList[0].url : ''
        this.hot_list = data
      }
    })
  }
}
</script>

<style scoped>
.condition {
  height: 250px;
  width: 100%;
  margin-top: 30px;
}

.condition-content {
  margin-left: 10%;
  margin-right: 10%;
  width: 1920px;
  height: 240px;
}

.condition-block {
  width: 300px;
  height: 240px;
  float: left;
  margin-left: 3%;
  color: white;
}

.condition-content-left {
  float: left;
  margin-top: 80px;
  text-align: left;
}

.condition-province {
  margin-left: 10px;
  height: 20px;
  float: left;
}

.age-input {
  height: 100px;
  width: 120px;
  margin-left: 10px;
}

.age-span {
  margin-left: 10px;
}

.condition-content-right {
  display: inline-block;
  width: 200px;
  height: 50px;
}

.context-image {
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  width: 1500px;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
}

.context-main {
  width: 80%;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
}

.select-aside {
  width: 20%;
}

.select-image {
  height: 99px;
  line-height: 99px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.2);
}

.home-content {
  margin-top: 10px;
  width: 100%;
}

.hot-adopt {
  float: left;
  height: 400px;
  width: 280px;
  margin-left: 90px;
  margin-top: 10px;
  background: #475669;
}

.pet-content {
  display: inline-block;
  height: 320px;
  width: 320px;
  margin-left: 50px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
