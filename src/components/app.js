import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import history from '../history'
import Header from './header'
import Signin from './auth/signin'
import Signup from './auth/signup'
import Signout from './auth/signout'
import requireAuth from './auth/require_auth'
import Items from './items/'
import Item from './items/item'
import Welcome from './welcome'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container >
          <div className="starter-template">
            <Router history={history} >
              <div>
                <Route exact path = "/" component={Welcome} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route exact path='/items' component={requireAuth(Items)} />
                <Route path='/items/:id' component={requireAuth(Item)} />
              </div>
            </Router>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
