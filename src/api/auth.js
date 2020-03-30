import axios from 'axios'

const api = {
  login: data =>
    axios({
      url: '/user/login',
      method: 'post',
      data
    }),

  getInfo: token =>
    axios({
      url: '/user/info',
      method: 'get',
      params: { token }
    })
}

export default api
