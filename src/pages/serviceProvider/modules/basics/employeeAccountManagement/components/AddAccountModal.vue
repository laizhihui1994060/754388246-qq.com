<template>
  <el-dialog title="新增员工账号" :visible.sync="show" width="640px" class="add-account">
    <el-form size="small" :model="form" ref="form" label-width="100px">
      <el-form-item :prop="formConf.account.key" :label="formConf.account.label" :rules="formConf.account.rule">
        <el-input v-model="form[formConf.account.key]" :placeholder="formConf.account.placeholder" />
      </el-form-item>
      <el-form-item :prop="formConf.name.key" :label="formConf.name.label" :rules="formConf.name.rule">
        <el-input v-model="form[formConf.name.key]" :placeholder="formConf.name.placeholder" />
      </el-form-item>
      <el-form-item :prop="formConf.phone.key" :label="formConf.phone.label" :rules="formConf.phone.rule">
        <el-input type="tel" v-model="form[formConf.phone.key]" :placeholder="formConf.phone.placeholder" />
      </el-form-item>
      <el-form-item :prop="formConf.email.key" :label="formConf.email.label" :rules="formConf.email.rule">
        <el-input type="email" v-model="form[formConf.email.key]" :placeholder="formConf.email.placeholder" />
      </el-form-item>
      <el-form-item :prop="formConf.loginPass.key" :label="formConf.loginPass.label" :rules="formConf.loginPass.rule">
        <el-input type="password" v-model="form[formConf.loginPass.key]" :placeholder="formConf.loginPass.placeholder" />
        <p v-if="formConf.loginPass.tip">{{ formConf.loginPass.tip }}</p>
      </el-form-item>
      <el-form-item :prop="formConf.paymentPass.key" :label="formConf.paymentPass.label" :rules="formConf.paymentPass.rule">
        <el-input type="password" v-model="form[formConf.paymentPass.key]" :placeholder="formConf.paymentPass.placeholder" />
        <p v-if="formConf.paymentPass.tip">{{ formConf.paymentPass.tip }}</p>
      </el-form-item>

      <el-form-item :prop="formConf.accountType.key" :label="formConf.accountType.label" :rules="formConf.accountType.rule">
        <el-radio-group v-model="form[formConf.accountType.key]">
          <el-radio :label="item.value" v-for="item in accountType" :key="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :prop="formConf.accountStatus.key" :label="formConf.accountStatus.label" :rules="formConf.accountStatus.rule">
        <el-radio-group v-model="form[formConf.accountStatus.key]">
          <el-radio :label="item.value" v-for="item in accountStatus" :key="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :prop="formConf.roles.key" :label="formConf.roles.label" :rules="formConf.roles.rule">
        <el-radio-group v-model="form[formConf.roles.key]">
          <el-radio :label="item.value" v-for="item in roles" :key="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
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
    const accountType = [
      {
        label: '员工账号',
        value: 'staff'
      }
    ]
    const accountStatus = [
      {
        label: '生效',
        value: 1
      },
      {
        label: '冻结',
        value: 0
      }
    ]

    const roles = [
      {
        label: '运营人员',
        value: 1
      },
      {
        label: '营销人员',
        value: 2
      },
      {
        label: '财务人员',
        value: 3
      }
    ]

    const formConf = {
      account: {
        label: '员工账号',
        key: 'account',
        placeholder: '英文、数字、特殊字符任意搭配',
        rule: [{ required: true, message: '请输入员工账号' }]
      },
      name: {
        label: '员工姓名',
        key: 'name',
        placeholder: '请输入员工姓名',
        rule: [{ required: true, message: '请输入员工姓名' }]
      },
      phone: {
        label: '手机号',
        key: 'phone',
        placeholder: '请输入手机号',
        rule: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('请输入手机号'))
              }
              if (!this.$utils.isPhone(value)) {
                return callback(new Error('手机号格式不正确'))
              } else {
                callback()
              }
            }
          }
        ]
      },
      email: {
        label: '邮箱',
        key: 'email',
        placeholder: '请输入邮箱',
        rule: [
          {
            validator: (rule, value, callback) => {
              if (value && !this.$utils.isEMail(value)) {
                return callback(new Error('邮箱格式不正确'))
              } else {
                callback()
              }
            }
          }
        ]
      },
      loginPass: {
        label: '登录密码',
        key: 'loginPass',
        tip: '登录服务商平台用密码',
        placeholder: '8-16位密码，英文、数字、特殊字符任意搭配',
        rule: [
          {
            required: true,
            message: '请输入登录密码'
          }
        ]
      },
      paymentPass: {
        label: '支付密码',
        key: 'paymentPass',
        tip: '服务商平台内部分功能用此密码',
        placeholder: '请输入支付密码',
        rule: [
          {
            required: true,
            message: '请输入支付密码'
          }
        ]
      },
      accountType: {
        label: '账号类型',
        key: 'accountType',
        placeholder: '请选择账号类型',
        rule: [
          {
            required: true,
            message: '请选择账号类型'
          }
        ]
      },
      accountStatus: {
        label: '账号状态',
        key: 'accountStatus',
        placeholder: '请选择账号状态',
        rule: [
          {
            required: true,
            message: '请选择账号状态'
          }
        ]
      },
      roles: {
        label: '分配角色',
        key: 'roles',
        placeholder: '请选择分配角色',
        rule: [
          {
            required: true,
            message: '请选择分配角色'
          }
        ]
      }
    }
    return {
      formConf,
      accountType,
      accountStatus,
      roles,
      form: {
        account: '',
        name: '',
        phone: '',
        email: '',
        loginPass: '',
        paymentPass: '',
        accountType: '',
        accountStatus: '',
        roles: ''
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
        await this.$confirm(this.isCreated ? '确认新增账号？' : '确认保存对员工账号的修改？', '温馨提示', {
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

<style lang="scss" scoped>
.add-account {
  ::v-deep .el-form {
    width: 400px;
    .el-form-item {
      position: relative;
      p {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(105%);
      }
    }
  }
}
</style>
