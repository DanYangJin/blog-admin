<template>
    <div class="app-container">
        <router-link :to="'/admin/addAdmin'">
            <el-button class="filter-item" type="primary" icon="el-icon-edit">
                添加
            </el-button>
        </router-link>
        <el-table class="admin-list-table" empty-text="暂无数据" :data="adminListData" border>
            <el-table-column label="序号" width="100" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.$index }}</span>
                </template>
            </el-table-column>
            <el-table-column label="管理员名称" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.adminUsername }}</span>
                </template>
            </el-table-column>
            <el-table-column label="创建时间" width="180" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.row.createTime }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                        {{scope.row.status == 1 ? '停用': '启用'}}
                    </el-button>
                    <el-button size="mini" type="danger"
                               @click="handleDelete(scope.$index, scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import {getAdminList, deleteAdmin} from "@/api/admin";
    export default {
        data() {
            return {
                adminListData: []
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                deleteAdmin(row.adminId)
                    .then((res) => {
                        this.$message.success(res['resultMessage']);
                        this.getAdminList();
                    })
            },
            getAdminList() {
                getAdminList().then((res) => {
                    this.adminListData = res['data']['list']
                })
            }
        },
        created() {
            this.getAdminList()
        }
    }
</script>

<style lang="scss" scoped>

    .admin-list-table {
        width: 80%;
        position: relative;
        top: 30px;
    }

</style>
