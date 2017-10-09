import { ITEMS_TABLE, ITEM_ADD, ITEM_GET, ITEM_ERROR } from '../actions/types'

export default function(state = {}, action){
  switch(action.type){
    case ITEMS_TABLE:
      return { ...state, items_table: action.payload }
    case ITEM_ADD:
      return { ...state, items_table: [].concat(state.items_table, action.payload)}
    case ITEM_GET:
      return { ...state, item: action.payload }
    case ITEM_ERROR:
      return{ ...state, message: action.payload}
    default:
      return state
  }
}