<template>
    <div class="example-pagination-block">
        <el-table :data="userList" border stripe style="width: 1500px;margin-top: 30px;margin-left: 5%;">
            <el-table-column prop="account" label="账号" width="180"/>
            <el-table-column prop="userName" label="用户名" width="180"/>
            <el-table-column prop="tel" label="手机号" width="180"/>
            <el-table-column prop="address" label="地址" width="180"/>
            <el-table-column prop="email" label="邮件" width="180"/>
            <el-table-column prop="signature" label="个性签名" width="180"/>
            <el-table-column prop="userType" label="用户类型" width="180"/>

            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                    >修改密码
                    </el-button
                    >
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @current-change="loadData" v-model:current-page="current" layout="prev, pager, next"
                       :total="total.valueOf()"/>
    </div>
</template>

<script>
import {inject, reactive, ref} from 'vue';
import http from '../../../http/httpUtil.js'
import {ElMessage} from 'element-plus'


export default {
    setup() {
        var current = ref(1);
        var pageSize = ref(10);
        var total = ref(0);
        const userList = reactive([]);
        const axios = inject('axios'); // 注入axios实例
        let url = 'user/getUserList/' + current.value + '/' + pageSize.value;
        axios.getData(url).then(res => {
            if (res.code == 200) {
                total.value = res.data.total;
                for (let i = 0; i < res.data.records.length; i++) {
                    userList.push(res.data.records[i]);
                }
            }
        })
        return {
            current,
            pageSize,
            total,
            userList
        }
    },
    methods: {
        loadData: function () {
            let url = 'user/getUserList/' + this.current + '/' + this.pageSize;
            http.getData(url).then(res => {
                if (res.code == 200) {
                    this.userList = res.data.records;
                    this.total = res.data.total;
                    // for (let i = 0; i < res.data.records.length; i++) {
                    //     this.userList.push(res.data.records[i]);
                    // }
                }
            })
        },
        handleEdit: function (index, row) {

        },
        handleDelete: function (index, row) {
            let url = 'admin/deleteUser/' + row.id
            http.delete(url).then(res => {
                if (res.code == 200) {
                    ElMessage({
                        message: '删除用户信息成功！',
                        type: 'success',
                    })
                    this.loadData();
                } else {
                    ElMessage.error("删除用户信息失败！")
                }
            })
        }
    }
}
</script>0

<style scoped>
.example-pagination-block + .example-pagination-block {
    margin-top: 10px;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}
</style>