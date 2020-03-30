// import store, { MODULE_AUTHORIZATION } from '@/store';
import axios from 'axios'
import { LOGIN_URL } from '@/constant'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 5000
// 在发送请求之前做些什么ack
axios.interceptors.request.use(config => {
  const { token } = store.state.authorization
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }

  return config
})

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    const dataErrcode = (response.data && response.data.errcode) || 0
    if (dataErrcode !== 0 && dataErrcode !== 200) {
      return onStatusError(response.data)
    }
    // 对响应数据做点什么
    return 'data' in response.data ? response.data.data : response.data
  },
  // 对响应错误做点什么
  error => onStatusError(error)
)

function onStatusError(error) {
  const err =
    'response' in error && error.response
      ? {
          errcode: error.response.data.errcode,
          message:
            error.response.data.errmsg === 'An internal server error occurred.' ? '服务器繁忙，请联系管理员' : error.response.data.errmsg
        }
      : {
          errcode: error.errcode || 10001,
          message: error.errmsg || error.message
        }

  Message({
    message: err.message,
    type: 'error',
    duration: 5 * 1000
  })

  if (err.errcode === 401 || err.errcode === 403) {
    store.dispatch(`${MODULE_AUTHORIZATION.name}/${MODULE_AUTHORIZATION.ACT_LOGOUT}`)
    location.href = LOGIN_URL
    location.reload(true)
    return Promise.reject(err)
  }
  return Promise.reject(err)
}
