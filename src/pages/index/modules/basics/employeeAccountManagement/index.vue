<template>
  <page>
    <div slot="headerLeft">
      <el-button type="primary" @click="visible = true">新增员工账号</el-button>
    </div>
    <div slot="headerRight">
      <el-input placeholder="员工姓名" v-model="params.name" @keyup.enter.native="replaceData" />
      <el-select v-model="params.role">
        <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button @click="replaceData">查询</el-button>
    </div>

    <div class="table-wrap">
      <el-table :data="tableData" border v-loading="loading" height="100%">
        <el-table-column prop="date" label="员工姓名">
          <template slot-scope="{ row }">
            {{ row.a }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="员工账号" />
        <el-table-column prop="address" label="手机号" />
        <el-table-column prop="address" label="账号状态" />
        <el-table-column prop="address" label="已分配角色" />
        <el-table-column prop="address" label="已分配角色" />

        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button size="mini" type="danger">删除{{ row.a }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination slot="pagination" :total="total" :page-size.sync="params.size" :page.sync="params.page" @change="getData" />
    <add-account-modal :visible.sync="visible" v-if="visible" />
  </page>
</template>

<script>
import watchParamsGetData from '@/mixins/watchParamsGetData'
import AddAccountModal from './components/AddAccountModal'

export default {
  mixins: [watchParamsGetData],
  components: {
    AddAccountModal
  },
  data() {
    return {
      visible: false
    }
  },
  created() {},
  methods: {
    getData() {
      console.log(this.params)
    }
  }
}
</script>

<style scoped lang="scss"></style>
