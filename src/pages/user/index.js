import React, { Component } from 'react';
import axios from '../../network';
import PageTitle from '../../components/pageTitle';
import Pagination from '../../components/pagination';
import MUtil from '../../utils/mm';
import UserList from '../../utils/user-service';
// import { doLogin } from '../../utils';

const _mm   = new MUtil();
const _user = new UserList();

class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageNum: 1
    }
  }

  componentDidMount() {
    this.loadUserList();
  }

  loadUserList = () => {
    // const { pageNum } = this.state;
    // const data = await axios.getUserList( pageNum );
    // if (data.status === 10) {
    //   doLogin();
    // } 
    // console.log(data);
    _user.getUserList(this.state.pageNum).then(res => {
      console.log(res)
      this.setState(res);
    });
  }

  render() {
    return (
      <div id='page-wrapper'>
        <PageTitle title='用户列表' />
        <div className='row'>
          <div className='col-md-12'>
            <table className='table table-striped table-border'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>123</td>
                  <td>133</td>
                  <td>123</td>
                  <td>123</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Pagination current={11} total={200} onChange={pageNum => console.log(pageNum)} />
      </div>
    )
  }
}

export default User;
