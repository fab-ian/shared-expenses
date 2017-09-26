import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  submitFormValues = (values) => {
    this.props.signinUser(values)
  }

  render(){
    const {handleSubmit} = this.props

    return(
      <div>
        <h2>Sign in</h2>

        <form onSubmit={ handleSubmit(this.submitFormValues) } >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Field component="input" name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field component="input" name="password" type="password" className="form-control" id="password" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

const SigninForm = reduxForm({form: 'signin'})(Signin)

export default connect(null, actions)(SigninForm)
