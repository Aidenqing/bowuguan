
import axios from 'axios'
import {domainName} from '@/common/config'

export function login (username, password) { // 登录
  const url = domainName + '/api/security/login'

  const data = Object.assign({}, {
    username: username,
    password: password
  })

  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCollectExhibits (belongId, page) { // 获取展品
  const url = domainName + '/api/personal/collectExhibits'

  const data = Object.assign({}, {
    belongId: belongId,
    pageSize: 6,
    type: 0,
    pageNo: page

  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
