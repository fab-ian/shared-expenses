import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  submitFormValues = (values) => {
    this.props.signupUser(values)
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


  renderField({ label, type, meta: { error, touched }, ...field }){
    return(
      <div className="form-group">
        <label htmlFor="email">{label}</label>
        <input { ...field.input } type={type} className="form-control" />
        { touched && error && <small className="form-text text-muted">{error}</small> }
      </div>
    )
  }

  render(){
    const {handleSubmit} = this.props

    return(
      <div>
        <h2>Sign up</h2>

        <form onSubmit={ handleSubmit(this.submitFormValues) } >
          <Field component={ this.renderField } name="name" type="text" label="Name" />
          <Field component={ this.renderField } name="email" type="email" label="Email" />
          <Field component={ this.renderField } name="password" type="password" label="Password" />
          <Field component={ this.renderField } name="password_confirm" type="password" label="Password confirm" />

          { this.renderAlert() }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(formProps){
  const errors = {}

  if(!formProps.name){
    errors.name = 'Please add a name'
  }

  if(!formProps.email){
    errors.email = 'Please add an email.'
  }

  if(!formProps.password){
    errors.password = 'Please add an password.'
  }

  if(!formProps.password_confirm){
    errors.password_confirm = 'Pleas confirm password'
  }

  if(formProps.password !== formProps.password_confirm){
    errors.password = 'Password must match'
  }

  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

const SignupForm = reduxForm({form: 'signup', validate })(Signup)

export default connect(mapStateToProps, actions)(SignupForm)
