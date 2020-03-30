<template>
  <el-dialog title="新增角色" :visible.sync="show">
    <el-tree
      :default-checked-keys="defaultNodes"
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    />

    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import dialogCommonParams from '@/mixins/dialogCommonParams'
export default {
  mixins: [dialogCommonParams],
  data() {
    return {
      defaultNodes: [9],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  created() {
    console.log('~~~~~~~~~~~~~~~~~')
    console.log(this.isCreated, this.isCreated, this.show)
    console.log('~~~~~~~~~~~~~~~~~')
  },
  methods: {
    submitForm() {
      const nodes = this.$refs.tree.getCheckedKeys()
      const halfNodes = this.$refs.tree.getHalfCheckedKeys()
      console.log(nodes)
      console.log(halfNodes)
    }
  }
}
</script>
