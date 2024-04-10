<template>
<!--  <div class="content-opera">-->
<!--    <div class="operation" @click="adoptClickFun">-->
<!--      <img src="../../../assert/images/adopterForm.jpg" class="operation-img">-->
<!--      <div class="operation-font">收养</div>-->
<!--    </div>-->
<!--    <div class="operation" @click="findClickFun">-->
<!--      <img src="../../../assert/images/findForm.jpg" class="operation-img">-->
<!--      <div class="operation-font">寻宠</div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="content from-div">-->
<!--    <div v-if="adoptFormFlag === false && findFlag === false">-->
<!--      发布你感兴趣的内容...-->
<!--    </div>-->
<!--    <div v-if="adoptFormFlag === true">-->
<!--      <adopt-form></adopt-form>-->
<!--    </div>-->
<!--    <div v-if="findFlag === true">-->
<!--      <find-from></find-from>-->
<!--    </div>-->
<!--  </div>-->
  <div class="content-opera">
        <div class="content-card radius" style="height: 400px;">
<!--          <div class="content-left-other" style="height: 400px;">-->
<!--            <img src="../../../assert/images/1.jpg" height="200px" width="320px" style="margin-top: 40px;margin-left: 90px;"/>-->
<!--            <div style="margin-top: 10px;margin-left: 90px;">-->
<!--              姓名：旺旺-->
<!--              <span style="margin-left: 10px"></span>-->
<!--              性别：男-->
<!--              <span style="margin-left: 10px"></span>-->
<!--              类型：汪星人-->
<!--            </div>-->
<!--            <div style="margin-top: 10px;margin-left: 90px;">-->
<!--              <el-tag type="danger">已绝育</el-tag> <span style="margin-left: 20px"></span>             <el-tag type="primary">已免疫</el-tag>-->
<!--            </div>-->
<!--            <div style="margin-top: 10px;margin-left: 90px;height: 60px;line-height: 60px;">-->
<!--              <span>发布人：</span>-->
<!--              <el-icon><User /></el-icon> 茗茗-->
<!--            </div>-->


<!--          </div>-->
<!--          <div class="content-right-other" style="height: 400px;">-->
<!--            <div style="margin-top: 10px;margin-left: 20px;">-->
<!--              <h1>收养心得 ：</h1>-->
<!--              <el-input type="textarea" style="width: 400px;height: 300px;"> </el-input>-->
<!--              <el-button type="primary" style="margin-left: 340px;">提交</el-button>-->
<!--            </div>-->



<!--          </div>-->

          <div class="content-left">
            <div class="operation" @click="adoptClickFun">
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
    margin-left: 10%;

  }
  .operation{
    height: 300px;
    display: inline-block;
    width: 450px;
    color: #fff;
    margin-top: 200px;
    margin-left: 40px;
  }
  .content-card{
    width: 1500px;
    height: 700px;
    position: relative;
  }
  .content-left{
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
    width: 500px;
    height: 700px;
    background:#FFF1DA;
    float: left;
  }
  .content-left-other{
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
    width: 500px;
    height: 700px;
    background: #c6e2ff;
    float: left;
    display: inline-block;
  }
  .content-right-other{
    width: 500px;
    height: 298px;
    display: inline-block;
    border: 1px solid rgba(0,0,0,0.1);
  }
  .content-right{
    width: 900px;
    height: 617px;
    display: inline-block;
    position: relative;
    background: white;
    //bottom: 170px;
    right: 100px;
    top: 40px;
    border-radius: 3%;
    box-shadow: 0 0  rgba(0,0,0,0.1),0em 0.2em rgba(0,0,0,0.1);
  }
  .from-div{
    text-align: center;
    width: 1600px;
    margin-top: 50px;
    height: 600px;
    background: rgba(0, 0, 0, 0.1);
  }
  .operation-img{
    width: 400px;
    height: 300px;
    float: left;
    cursor: pointer;
  }
  .operation-img:focus,.operation-img:hover{
    box-shadow: 2px 3px rgba(0,0,0,0.1);
  }
  .operation-font{
    display: inline-block;
    position: relative;
    //top: 250px;
    left: 120px;
    //right: 220px;
    font-size: 24px;
    color: black;
  }
</style>
