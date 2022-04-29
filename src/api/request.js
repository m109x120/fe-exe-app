import axios from 'axios'
import config from '../../config'
import { ElMessage } from 'element-plus'
// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截器
service.interceptors.request.use(req => {
  const headers = req.headers
  if (!headers.Authorization) headers.Authorization = 'Bear Grace'
  return req
})

// 响应拦截
service.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  }
  if (code === 40001) {
    ElMessage.error('请重新登录')
    return Promise.reject('请重新登录')
  }
  // 其他错误上报做监控处理
  // (new Image()).src="http://baidu.com/home?r=123"
})

function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.parmas = options.data
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}
['get', 'post', 'delete', 'put'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})
export default request