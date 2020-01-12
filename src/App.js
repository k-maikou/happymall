import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './index.scss';

import Home from './pages/home';
import User from './pages/user';
import Login from './pages/login';
import ErrorPage from './pages/error';
import Layout from './components/layout';

class App extends PureComponent {

  layoutRouter = () => (
    <Layout>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product' component={Home} />
          <Route path='/product/category' component={Home} />
          <Route path='/user/index' component={User} />
          <Redirect exact from='/user' to='/user/index' />

          <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' render={props => this.layoutRouter()}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
