import axios from 'axios'
import {domainName} from '@/common/config'

export function getIndex (belongId) { // 获取首页数据
  let url = domainName + '/api/index/'
  let data = Object.assign({}, {
  })
  if (belongId) {
    url = domainName + '/api/index/mobile'
    data = Object.assign({}, {
      belongId: belongId
    })
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getMuseumList (belongId, page) { // 列表
  const url = domainName + '/api/index/mobile/museumType'

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

export function getMuseumDetail (museumId) { // 获取展品
  const url = domainName + '/api/museum/museumDetail'

  const data = Object.assign({}, {
    type: 1,
    museumId: museumId

  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function collectExhibit (id) { // 获取展品
  const url = domainName + '/api/personal/collect'

  const data = Object.assign({}, {
    id: id

  })

  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function unCollectExhibit (id) { // 获取展品
  const url = domainName + '/api/personal/deleteExhibits'

  const data = Object.assign({}, {
    id: id

  })

  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
