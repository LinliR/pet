<template>
    <el-form :model="formData" style="margin-left:20px;margin-top: 30px;">

        <el-form-item>
            <el-form-item label="宠物名">
                <el-input v-model="formData.name"/>
            </el-form-item>
            <el-form-item label="年龄" style="margin-left: 20px;">
                <el-input v-model="formData.age"/>
            </el-form-item>

            <el-form-item label="性别" style="margin-left: 20px;">
                <el-radio-group v-model="formData.sex">
                    <el-radio value="man">男</el-radio>
                    <el-radio value="woman">女</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form-item>

        <el-form-item>
            <el-form-item label="品种">
                <el-input v-model="formData.species"/>
            </el-form-item>
            <el-form-item label="走失区域" style="margin-left: 20px;">
                <el-input style="margin-left: 10px; width: 100px" v-model="formData.province" placeholder="省"/>
                <el-input style="margin-left: 10px; width: 100px" v-model="formData.city" placeholder="市"/>
            </el-form-item>
        </el-form-item>

        <el-form-item>
            <el-form-item label="悬赏价格">
                <el-input v-model="formData.reward"/>
            </el-form-item>
        </el-form-item>

        <el-form-item label="详情">
            <el-input type="textarea" v-model="formData.description"/>
        </el-form-item>


        <el-form-item label="图片">
            <el-upload
                    v-model:file-list="fileList"
                    action="http://localhost:8080/img/upload"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
            >
                <el-icon>
                    <Plus/>
                </el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image"/>
            </el-dialog>
        </el-form-item>

        <el-form-item style="float: right;margin-right: 50px;margin-top: 30px;">
            <el-button @click="submitAnimalInfo()" type="primary">提交</el-button>
        </el-form-item>


    </el-form>
</template>

<script lang="ts">

import {reactive} from 'vue'
import http from '../../../../http/httpUtil.js'
import {ElMessage} from 'element-plus'
import {ref} from 'vue'
import {Plus} from '@element-plus/icons-vue'

import {UploadProps, UploadUserFile} from 'element-plus'

export default {
    setup() {
        const formData = reactive({});
        const fileList = ref<UploadUserFile[]>([])

        const dialogImageUrl = ref('')
        const dialogVisible = ref(false)

        const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
            console.log(uploadFile, uploadFiles)
        }

        const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
            dialogImageUrl.value = uploadFile.url!
                dialogVisible.value = true
        }
        return {
            formData,
            handleRemove,
            handlePictureCardPreview,
            fileList,
        }
    },
    methods: {
        submitAnimalInfo() {
            let animalInfo = JSON.parse(JSON.stringify(this.formData));
            animalInfo.animalState = 'search';
            let animalImgList = [];
            this.fileList.forEach((file) => {
                console.log(file.response.data.url)
                let img = {url: ''};
                img.url = file.response.data.url;
                animalImgList.push(img);
            })
            animalInfo.animalImgList = animalImgList;
            http.post("animalInfo/add", animalInfo).then(res => {
                if (res.code == 200) {
                    ElMessage({
                        message: '发布寻宠信息成功！',
                        type: 'success',
                    })
                    let id = res.data.id;
                    this.$router.push({
                        path: "/userPet",
                        query: {id: id}
                    });
                } else {
                    ElMessage.error("发布寻宠信息失败！")
                }
            })
        }
    }
}

</script>


<style scoped>

</style>