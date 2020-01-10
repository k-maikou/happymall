// 跳转登录
export const doLogin = () => {
  window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}
// 获取URL参数
export const getUrlParams = (pathName) => {
  let queryString = window.location.search.split('?')[1] || '',
      reg = new RegExp("(^|&)" + pathName + "=([^%]*)(&|$)"),
      result = queryString.match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
// 检测登录接口数据是否合法
export const checkLoginInfo = (loginInfo) => {
  let username = loginInfo.username.trim(),
      password = loginInfo.password.trim();
  if (typeof username !== 'string' || username.length === 0) {
    return {
      status: false,
      msg: '用户名不能为空!'
    }
  }
  if (typeof password !== 'string' || password.length === 0) {
    return {
      status: false,
      msg: '密码不能为空!'
    }
  }
  return {
    status: true,
    msg: '验证通过'
  }
}
// 本地存储方法
export const setStorage = (name, data) => {
  let dataType = typeof data;
  // json对象
  if (dataType === 'object') {
    window.localStorage.setItem(name, JSON.stringify(data));
  } 
  // 基础类型
  else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0 ) {
    window.localStorage.setItem(name, data);
  } 
  // 其他不支持的类型
  else {
    alert('该类型不能用于本地存储!');
  }
}
// 获取本地存储内容
export const getStorage = (name) => {
  let data = window.localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  } else {
    return '';
  }
}
// 删除本地存储内容
export const deleteStorage = (name) => {
  window.localStorage.removeItem(name);
}
