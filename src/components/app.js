import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import history from '../history'
import Header from './header'
import Signin from './auth/signin'
import Signup from './auth/signup'
import Signout from './auth/signout'
import requireAuth from './auth/require_auth'
import Items from './items'
import Welcome from './welcome'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="starter-template">
            <Router history={history} >
              <div>
                <Route exact path = "/" component={Welcome} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path='/items' component={requireAuth(Items)} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
