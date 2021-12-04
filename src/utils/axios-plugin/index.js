import axios from "axios";
import qs from "qs";
import baseConfig from "../../config";



const methodArr = ["post", "put", "delete", "patch"];

const Axios = axios.create({
  baseURL: baseConfig.SERVER_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  },
  validateStatus: function(status) {
    return status >= 200 && status <= 300; // default
  }
  // responseType: "json",
});

//请求拦截器
Axios.interceptors.request.use(
  async config => {
    if (methodArr.includes(config.method)) {
      // 序列化，取决于后端能否接受json数据
      if (config.url.indexOf("img") >= 0) {
        config.headers = { "Content-Type": "multipart/form-data" };
      } else {
        config.headers = {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        };
        config.data = qs.stringify(config.data);
      }
    }
    //增加token
    if (!config.auth && window.localStorage.getItem("BLOG_TOKEN")) {
      const token = JSON.parse(window.localStorage.getItem("BLOG_TOKEN"));
      config.auth = {
        username: token.user.name,
        password: token.token
      };
      Axios.defaults.auth = {
        username: token.user.name,
        password: token.token
      };
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);



Axios._put = (url, data) => {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "put",
      data: data,

    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};
Axios._post = (url, data) => {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "post",
      data: data,

    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};
Axios._get = (url, parmas) => {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "get",
      params: parmas,

    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};
Axios._delete = (url, params) => {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "delete",
      params: params,

    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};



export default {
  install: (Vue, Option) => {
    Object.defineProperty(Vue.prototype, "$axios", { value: Axios });
  }
};
