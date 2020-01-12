import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
const Pagination = (props) => (
  <div className='row'>
    <div className='col-md-12'>
      <RcPagination {...props} hideOnSingLePage showQuickJumper/>
    </div>
  </div>
)

export default Pagination;
