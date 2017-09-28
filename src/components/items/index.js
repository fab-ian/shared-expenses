import React, { Component } from 'react'
import ItemsTable from './items_table'

class Items extends Component {
  render(){
    return(
      <div>
        <h2>Items</h2>
        <ItemsTable />
      </div>
    )
  }
}

export default Items
