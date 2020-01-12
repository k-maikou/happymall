import { request } from './request';

class Axios {
  // 登录
  static getSideNavData = (username, password) => {
    return request({
      url: '/manage/user/login.do',
      method: 'POST',
      // withCredentials : true,
      params: {
        username,
        password,
      }
    })
  }
  // 退出登录
  static userLogOut = () => {
    return request({
      url: '/user/logout.do',
      method: 'POST'
    })
  }
  // 首页数据请求
  static  getHomeCount = () => {
    return request({
      url: '/manage/statistic/base_count.do',
    })
  }
}

export default Axios;
