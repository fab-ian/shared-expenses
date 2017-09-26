import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  submitFormValues = (values) => {
    this.props.signinUser(values)
  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Error: {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render(){
    const {handleSubmit} = this.props

    return(
      <div>
        <h2>Sign in</h2>

        <form onSubmit={ handleSubmit(this.submitFormValues) } >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Field component="input" name="email" type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field component="input" name="password" type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          { this.renderAlert() }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

const SigninForm = reduxForm({form: 'signin'})(Signin)

export default connect(mapStateToProps, actions)(SigninForm)
