import axios from 'axios'
import qs from 'qs'
import baseConfig from '../../config'
import {Message} from "element-ui";

const CancelToken = axios.CancelToken
let cancel, promiseList = {}

const Axios = axios.create({
  baseURL: baseConfig.SERVER_URL,
  timeout: 10000,
  withCredentials: true,
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  },
  cancelToken: new CancelToken(c => {
    cancel = c
  })
})

//请求拦截器
Axios.interceptors.request.use(
  (config) => {
    let url_all = baseConfig.SERVER_URL + config.url
    let url_all_date = baseConfig.SERVER_URL + config.url + new Date().getTime()
    let key
    for (let item of Object.keys(promiseList)) {
      if (item.indexOf(url_all)) {
        key = item
      }
    }
    if (key) {
      //运行上一次的取消函数
      promiseList[key]('重复请求，操作取消')
      //存入这次的取消函数
      promiseList[url_all_date] = cancel
    } else {
      promiseList[url_all_date] = cancel
    }

    if (
      config.method === "post"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
      // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
    }
    return config
  },
  (err) => {
    return Promise.reject(err)

  })

//响应拦截处理
Axios.interceptors.response.use(
  response => {
    //拿到返回数据后清除取消函数
    // let index = Object.keys(promiseList).indexOf(response.config.url)
    let key
    for (let item of Object.keys(promiseList)) {
      if (item.indexOf(response.config.url)) {
        key = item
      }
    }
    if (key) {
      // let key = Object.keys(promiseList)[index]
      promiseList[key] = null
    }
    console.log('resp', response)
    return response
  }, err => {
    if (err && err.response) {
      console.log(err.response.data)
      let url_all = err.config.url
      let key
      for (let item of Object.keys(promiseList)) {
        if (item.indexOf(url_all)) {
          key = item
        }
      }
      if (key) {
        // let key = Object.keys(promiseList)[index]
        promiseList[key] = null
      }
      switch (err.response.status) {
        case 400:
          err.message = '请求参数有误'
          break;
        case 401:
          err.message = '未授权，请重新登录'
          break;
        case 403:
          err.message = '拒绝访问'
          break;
        case 404:
          err.message = '请求错误,未找到该资源'
          break;
        case 405:
          err.message = '请求方法未允许'
          break;
        case 408:
          err.message = '请求超时'
          break;
        case 500:
          err.message = '服务器端出错'
          break;
        case 501:
          err.message = '网络未实现'
          break;
        case 502:
          err.message = '网络错误'
          break;
        case 503:
          err.message = '服务不可用'
          break;
        case 504:
          err.message = '网络超时'
          break;
        case 505:
          err.message = 'http版本不支持该请求'
          break;
        default:
          err.message = `连接错误${err.response.status}`
      }
    } else {
      if(err.config) {
        let key
        for (let item of Object.keys(promiseList)) {
          if (item.indexOf(err.config.url)) {
            key = item
          }
        }
        if (key) {
          promiseList[key] = null
        }
        err.message = "连接到服务器失败"
      }
      else {
        console.log('hh')
      }
    }


    Message.error(err.message)
    return Promise.reject(err)
  })

export default {
  install: (Vue, Option) => {
    Object.defineProperty(Vue.prototype, "$axios", {value: Axios})
  }
}
