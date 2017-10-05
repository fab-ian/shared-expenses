import React, {Component} from 'react'
import * as items_actions from '../../actions/items'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ItemTable extends Component {
  componentWillMount(){
    this.props.items_table()
  }

  render(){
    let tr = []

    if(this.props.items_content) {
      tr = this.props.items_content.map(item => (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>
          <Link to={ {pathname: `/items/${item.id}`} }>{item.name}</Link>          
        </td>
        <td>{item.description}</td>
        <td></td>
      </tr>
    ))
    }

    return(
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tr}
          </tbody>
        </table>        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {items_content: state.items.items_table }
}

export default connect(mapStateToProps, items_actions)(ItemTable)