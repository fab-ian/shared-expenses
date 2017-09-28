import { ITEMS_TABLE } from '../actions/types'

export default function(state = {}, action){
  switch(action.type){
    case ITEMS_TABLE:
      return { ...state, items_table: action.payload }
    default:
      return state
  }
}