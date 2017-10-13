import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions/payments'
import { connect } from 'react-redux'

class PaymentAdd extends Component {

  savePayment = options => {
    // console.log(options)
    // console.log(this.props.itemId)
    options.itemId = this.props.itemId
    this.props.addPayment(options)
  }
  
  renderInputFields({ label, ...fields }){
    return(
      <div className='form-group'>
        <label>{label}</label>
        <input {...fields.input} className='form-control' />
      </div>
    )
  }

  renderTextAreaFields({ label, ...fields}){
    return(
      <div className='form-group'>
        <label>{label}</label>
        <textarea {...fields.input} className='form-control'></textarea>
      </div>
    )
  }

  render(){
    const { handleSubmit } = this.props
    
    return(
      <div>
        <h3>Add Payment</h3>
        <form onSubmit={ handleSubmit(this.savePayment) } >
          <Field component={this.renderInputFields} name='name' type='text' label='Name' />
          <Field component={this.renderTextAreaFields} name='description' type='text' label='Description' />

          <button type="submit" className='btn btn-primary'>Save</button>
        </form>
      </div>
    )
  }
}

const PaymentAddForm = reduxForm({form: 'payment_add'})(PaymentAdd)

export default connect(null, actions)(PaymentAddForm)