<template>
  <el-dialog title="新增角色" :visible.sync="show">
    <el-form :model="form" ref="form" label-width="100px">
      <el-form-item :prop="formConf.name.key" :label="formConf.name.label" :rules="formConf.name.rule">
        <el-input v-model="form[formConf.name.key]" :placeholder="formConf.name.placeholder" />
      </el-form-item>
      <el-form-item :prop="formConf.desc.key" :label="formConf.desc.label" :rules="formConf.desc.rule">
        <el-input type="textarea" v-model="form[formConf.desc.key]" :placeholder="formConf.name.placeholder" />
      </el-form-item>
    </el-form>
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
  components: {},
  data() {
    const formConf = {
      name: { label: '角色名称', key: 'name', placeholder: '请输入角色名称', rule: [{ required: true, message: '请输入角色名称' }] },
      desc: { label: '角色简介', key: 'desc', placeholder: '请输入角色简介' }
    }
    return {
      formConf,
      form: {
        name: '',
        desc: ''
      }
    }
  },
  created() {
    console.log('~~~~~~~~~~~~~~~~~')
    console.log(this.isCreated, this.isCreated, this.show)
    console.log('~~~~~~~~~~~~~~~~~')
  },
  methods: {
    async submitForm() {
      try {
        await this.$confirm('确认新增员工角色？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        this.$refs['form'].validate(valid => {
          if (valid) {
            console.log('~~~~~~~~~~~~~~~~~')
            console.log(this.form)
            console.log('~~~~~~~~~~~~~~~~~')
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
