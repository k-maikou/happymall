import React, { Component } from 'react';
import axios from '../../network';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getStorage, deleteStorage } from '../../utils';

class TopNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: getStorage('userInfo').username || ''
        }
    }

    // 退出登录
    onLogOut = async () => {
        try {
            const { data } = await axios.userLogOut();
            if (data.status === 0) {
                this.props.history.push('/login');
                deleteStorage('userInfo');
            }
        } catch (error) {
            throw error;
        }
    }

    // 跳转登录
    handleLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        const { username } = this.state;
        return (
        <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand cc_pointer" to="/"><b>HAPPY</b> MALL</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    {
                        username ? 
                        <li className="dropdown">
                            <a className="dropdown-toggle" aria-expanded="false">
                                <i className="fa fa-user fa-fw"></i>
                                    <span className="userLogin">欢迎，{ username }</span>
                                <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li onClick={ this.onLogOut }>
                                    <a href="#"><i className="fa fa-sign-out fa-fw"></i> 退出登录</a>
                                </li>
                            </ul>
                        </li> :
                        <li className="dropdown">
                            <a className="dropdown-toggle" aria-expanded="false">
                                <i className="fa fa-user fa-fw"></i>
                                <span className="userLogin" onClick={this.handleLogin}>亲，请登录</span>
                            </a>
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(TopNav);
