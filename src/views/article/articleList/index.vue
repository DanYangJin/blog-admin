<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.articleStatus" placeholder="请选择审核状态" clearable style="width: 145px" class="filter-item">
                <el-option v-for="item in articleStatusOptions" :key="item" :label="item"
                           :value="item"/>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search">
                搜索
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">
                添加
            </el-button>
            <el-button class="filter-item" type="primary" :loading="downloadLoading"  icon="el-icon-download" @click="handleExport">
                导出
            </el-button>
            <el-button class="filter-item" type="primary" @click="handleMethodTest">
                测试
            </el-button>
        </div>
    </div>
</template>

<script>
    import store from "@/store/store";
    export default {
        data() {
            return {
                listQuery: {
                    articleStatus: undefined
                },
                articleStatusOptions: ['待审核', '已审核', '已删除'],
                downloadLoading: false,
                sharedState:store.state
            }
        },
        methods: {
            handleExport() {
                this.downloadLoading = true;
                setTimeout(function () {
                    this.downloadLoading = false;
                }, 5000)
            },
            handleMethodTest() {
                let m = 1;
                console.log("m: " + m)
            }
        }

    }
</script>

<style scoped>

</style>
