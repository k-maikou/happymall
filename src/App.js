import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './index.scss';

import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' render={props => (
            <Layout>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/product' component={Home} />
                  <Route path='/product/category' component={Home} />
              </Switch>
            </Layout>
          )}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
