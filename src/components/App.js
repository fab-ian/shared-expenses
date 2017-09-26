import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import history from '../history'
import Header from './header'
import Signin from './auth/signin'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="starter-template">
            <Router history={history} >
              <div>
                <Route exact path = "/" render={ () => <p> Landing page </p>} />
                <Route path="/signin" component={Signin} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
