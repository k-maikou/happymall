import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from '../../network';

class SideNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navList: []
        }
    }

    componentDidMount() {
        this.requestList();
    }

    requestList = async() => {
        try {
            const { data } = await axios.getSideNavData();
            this.setState({
                navList: data.request
            })
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav" >
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-list"></i>
                                <span>商品</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink exact to="/product" activeClassName='active-menu'>商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName='active-menu'>
                                        品类管理
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName='active-menu'>订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-user-o"></i>
                                <span>用户</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName='active-menu'>用户管理</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideNav;
