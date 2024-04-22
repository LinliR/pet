<template>
    <el-dialog v-model="top" style="width: 800px;height: 438px" :before-close="closeFun">
        <div>
            <h1>注册新用户</h1>
            <el-form :model="loginData" style="margin-top: 20px;margin-left: 10px" label-position="left">
                <el-form-item>
                    <el-form-item label="账户名" class="ml20px">
                        <el-input v-model="loginData.account" class="login-input"/>
                    </el-form-item>
                    <el-form-item label="昵称" class="ml20px">
                        <el-input v-model="loginData.userName" class="login-input"/>
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-form-item label="手机号" class="ml20px">
                        <el-input v-model="loginData.tel" :rules="phoneNumberRules" class="login-input"/>
                    </el-form-item>
                    <el-form-item label="密码" class="ml20px">
                        <el-input type="password" v-model="loginData.password" class="login-input"/>
                    </el-form-item>

                </el-form-item>
                <el-form-item>
                    <el-form-item label="邮件" class="ml20px">
                        <el-input v-model="loginData.email" class="login-input"/>
                    </el-form-item>
                    <el-form-item label="地址" class="ml20px">
                        <el-input v-model="loginData.address" class="login-input"/>
                    </el-form-item>
                </el-form-item>

                <el-form-item label="验证码">
                        <el-input v-model="loginData.tel"  class="login-input"/>
                    <el-button type="success" @click="register" style="margin-left: 20px;" >点我获取验证码</el-button>
                </el-form-item>

                <el-form-item label="个性签名">
                    <el-input type="textarea" v-model="loginData.signature" class="login-input" style="width: 500px"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="register" style="margin-left: 670px;">注册</el-button>
                </el-form-item>
            </el-form>
        </div>


    </el-dialog>
</template>
<script>
import http from '../../http/httpUtil.js'
import {ElMessage} from 'element-plus'
import {computed, reactive} from "vue";
export default {

    setup(){
        const phoneNumberRules = computed(() => [
            (value) => /^\d{11}$/.test(value) || '请输入11位数字',
            (value) => /^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|3|5|6|7|8]|18[0-9]|19[8|9])\d{8})$/.test(value) || '请输入有效的手机号码',]);

        return {
            phoneNumberRules
        }
    },
    data: function () {
        return {
            top: true,
            loginData: {}
        }
    },
    methods: {
        transRegister: function () {
            this.$router.push('register');
        },
        closeFun: function () {
            this.$router.back();
        },
        register: function () {
            let loginForm = this.loginData;

            const phoneRegex = /^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|3|5|6|7|8]|18[0-9]|19[8|9])\d{8})$/;
            if ( this.loginData.account ===undefined || this.loginData.account.length <3) {
                ElMessage.error('请输入大于3位的账户名');
                return false;
            }
            if (this.loginData.userName ===undefined ||this.loginData.userName.length <4) {
                ElMessage.error('请输入大于4位的昵称');
                return false;
            }
            if (this.loginData.tel ===undefined ||!phoneRegex.test(this.loginData.tel)) {
                    ElMessage.error('手机号码无效');
                    return false;
            }
            if (this.loginData.password ===undefined || this.loginData.password.length <6 ||  this.loginData.password.length >12){
                ElMessage.error('请输入大于6位且小于12位的密码');
                return false;
            }
            this.loginData.userType="User";
            http.post("user/regist", loginForm).then(res => {
                if (res.code == 200) {
                    ElMessage({
                        message: '保存成功！',
                        type: 'success',
                    });
                    /*存放用户信息到缓存*/
                    localStorage.setItem("userInfo",JSON.stringify(res.data));
                    this.$router.back();
                } else {
                    ElMessage.error(res.message)
                }
            })

        }
    }
}
</script>

<style scoped>
.login-info {
    text-align: center;
}

.login-input {
    width: 300px;
}

</style>