<template>
    <div class="app-container">
        <el-form :label-position="labelPosition" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                 >
            <el-form-item label="名称:" prop="adminUsername" class="add-admin-form-item">
                <el-input v-model="ruleForm.adminUsername" placeholder="请输入管理员名称"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="adminPassword" class="add-admin-form-item">
                <el-input v-model="ruleForm.adminPassword" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPassword" class="add-admin-form-item">
                <el-input v-model="ruleForm.checkPassword" placeholder="请输入确认密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {addAdmin} from "@/api/admin";
    export default {
        data() {
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入管理员名称'));
                } else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.adminPassword !== '') {
                        this.$refs.ruleForm.validateField('checkPassword');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.adminPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                labelPosition: 'left',
                ruleForm: {
                    adminUsername: '',
                    adminPassword: '',
                    checkPassword: ''
                },
                rules: {
                    adminUsername: [
                        { required: true, validator: validateUsername, trigger: 'blur' },
                    ],
                    adminPassword: [
                        { required: true, validator: validatePass, trigger: 'blur' }
                    ],
                    checkPassword: [
                        { required: true, validator: validatePass2, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.requestAddAdmin()
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            requestAddAdmin() {
                addAdmin(this.ruleForm.adminUsername, this.ruleForm.adminPassword).then((res) => {
                    this.$message.success(res['resultMessage'])
                    this.$router.push({ path: '/admin/adminList'});
                })
            }

        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>

    .add-admin-form-item {
        width: 300px;
    }

</style>
