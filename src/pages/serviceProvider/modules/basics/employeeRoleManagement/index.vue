<template>
  <page>
    <div slot="hederLeft">
      <el-button type="primary">新增角色</el-button>
    </div>

    <div class="content">
      <el-row :gutter="12">
        <el-col :span="8" v-for="(item, index) in rules" :key="item.name + index">
          <el-card size="small" shadow="hover" class="box-card">
            <template slot="header">
              <span>角色名称-{{ item.name }}</span>
              <el-button type="text" @click="delRule">删除角色</el-button>
            </template>
            <p class="desc">{{ item.desc }}</p>
            <span class="status" v-if="!item.status">{{ !item.status && '未分配角色' }}</span>
            <div class="footer">
              <el-button
                type="primary"
                @click="
                  authVisible = true
                  currentItem = item
                "
                >编辑</el-button
              >
              <el-button
                type="primary"
                @click="
                  ruleVisible = true
                  currentItem = item
                "
                >分配权限</el-button
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <auth-modal :visible.sync="authVisible" v-if="authVisible" />
    <rule-modal :visible.sync="ruleVisible" v-if="ruleVisible" />
  </page>
</template>

<script>
import AuthModal from './components/AuthModal'
import RuleModal from './components/RuleModal'
export default {
  components: {
    AuthModal,
    RuleModal
  },
  props: {},
  data() {
    return {
      authVisible: false,
      ruleVisible: false,
      currentItem: null,
      rules: [
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        },
        {
          name: '运营人员',
          desc: '运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常运营人员主要负责维护业务的日常',
          status: 0
        }
      ]
    }
  },
  computed: {},
  created() {},
  watch: {},
  methods: {
    delRule() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  // display: flex;
  // flex-wrap: wrap;
  height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  ::v-deep .el-card {
    // width: 240px;
    margin-bottom: 12px;
    .el-card__body,
    .el-card__header {
      padding: 10px;
    }

    .el-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      button {
        padding: 0;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 13px;
    }
    .status {
      color: #d8d8d8;
      text-align: center;
      display: block;
      font-size: 12px;
      margin: 10px 0;
    }
  }
}
</style>
