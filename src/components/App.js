import React, { Component } from 'react';
import { Route } from 'react-router'
import Header from './header'
import Signin from './auth/signin'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="starter-template">
            <Route exact path = "/" render={ () => <p> Landing page </p>} />
            <Route path="/signin" component={Signin} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
