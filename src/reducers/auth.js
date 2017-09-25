import { AUTH_USER } from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', authentication: true }
    default:
      return state
  }
}
