import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/items'
import PaymentAdd from '../payments/payment_add'
import PaymentList from '../payments/payment_list'

class Item extends Component {
  componentWillMount(){
    this.props.getItem(this.props.match.params.id)
  }

  renderBasicInfo(){
    if(this.props.item){
      return(
        <div>
          <p>{this.props.item.name}</p>
          <p>{this.props.item.description}</p>
          <hr />
          <PaymentAdd itemId={this.props.item.id} />
          <hr />
          <PaymentList payments={this.props.item.payments} />
        </div>
      )
    }
  }

  render(){    
    return(
      <div>
        <h2>Item</h2>        
        {this.renderBasicInfo()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    item: state.items.item
  }
}

export default connect(mapStateToProps, actions)(Item)
