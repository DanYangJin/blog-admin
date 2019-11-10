<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.articleStatus" placeholder="请选择审核状态" clearable style="width: 145px" class="filter-item">
                <el-option v-for="item in articleStatusOptions" :key="item" :label="item"
                           :value="item"/>
            </el-select>
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search">
                搜索
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">
                添加
            </el-button>
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleExport">
                导出
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        data() {
            return {
                listQuery: {
                    articleStatus: undefined
                },
                articleStatusOptions: ['待审核', '已审核', '已删除'],
                downloadLoading: false
            }
        },
        methods: {
            handleExport() {
                this.downloadLoading = true
            }
        }

    }
</script>

<style scoped>

</style>
