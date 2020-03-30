import Vue from 'vue'
import '@/assets/css/element-variables.scss'

import {
  Header,
  Main,
  Aside,
  Container,
  Menu,
  Submenu,
  Button,
  Input,
  Select,
  Tabs,
  TabPane,
  MenuItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Card,
  Row,
  Col,
  Form,
  FormItem,
  Tree,
  RadioGroup,
  Radio,
  Icon,
  Message,
  Loading,
  MessageBox,
  Notification
} from 'element-ui'

const coms = [
  Header,
  Main,
  Aside,
  Container,
  Menu,
  Submenu,
  Button,
  Input,
  Select,
  Tabs,
  TabPane,
  MenuItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Card,
  Row,
  Col,
  Form,
  FormItem,
  Tree,
  RadioGroup,
  Radio,
  Icon
]

coms.forEach(com => {
  Vue.use(com)
})

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
