import React, { Component } from 'react'

class PaymentList extends Component {
  render(){
    const list = this.props.payments.map(payment => <li key={payment.id}>{payment.name}</li>)
    
    return(
      <div>
        <h3>Payment list</h3>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default PaymentList
