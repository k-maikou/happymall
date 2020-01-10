import React, { Component } from 'react';
import axios from '../../network';
import { doLogin, getUrlParams, checkLoginInfo, setStorage } from '../../utils';
import './index.scss';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: getUrlParams('redirect') || '/'
    }
  }

  componentDidMount() {
    document.title = '登录 - MALL ADMIN'
  }

  // 监听用户名和密码输入
  onInputChange = (e) => {
    let inputName = e.target.name, 
        inputValue = e.target.value;
    // console.log(inputName, inputValue);
    this.setState({
      [inputName]: inputValue
    })
  }

  // 登录
  onSubmit = async () => {
    
    const { username, password, redirect } = this.state;
    let loginInfo = { username, password };
    let checkResult = checkLoginInfo(loginInfo);

    try {
      if (checkResult.status === true) {

        const { data } = await axios.getSideNavData(username, password);
        setStorage('userInfo', data.data);
        if (data.status === 0) {
          this.props.history.push(redirect);
        } else if(data.status === 10) {
          doLogin();
        } else {
          this.user.value = '';
          this.password.value = '';
          alert(data.msg);
        }

      } else if (checkResult.status === false) {
        alert(checkResult.msg)
      }

    } catch (error) {
      throw error;
    }
    
  }

  // 回车登录
  onInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登陆 - MALL系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">用户名</label>
                <input 
                  type="text"
                  name='username'
                  className="form-control" 
                  placeholder="请输入用户名"
                  ref={ins => this.user = ins}
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">密码</label>
                <input 
                  type="password"
                  name='password'
                  className="form-control" 
                  placeholder="请输入密码"
                  ref={ins => this.password = ins}
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-block btn-primary"
                onClick={this.onSubmit}
              >
                登陆
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
