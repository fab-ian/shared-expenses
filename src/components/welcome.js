import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render(){
    return(
      <div>
        <h1>Welcome</h1>
        <Link to="/items">Items</Link>
      </div>
    )
  }
}

export default Welcome