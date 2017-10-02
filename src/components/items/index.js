import React, { Component } from 'react'
import ItemsTable from './items_table'
import ItemAdd from './item_add'

class Items extends Component {
  render(){
    return(
      <div>
        <h2>
          Items
          <ItemAdd buttonLabel="Add Item"/>        
        </h2>
        <ItemsTable />
      </div>
    )
  }
}

export default Items
