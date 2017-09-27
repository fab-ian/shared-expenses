import React, { Component } from 'react'
import * as functions from '../../actions'
import { connect } from 'react-redux'

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser()
  }

  render(){
    return(
      <p>You have been signed out successfully.</p>
    )
  }
}

export default connect(null, functions)(Signout)
