import axios from 'axios'
import { API_URL } from '../settings'
import { ITEM_GET } from './types'

export function addPayment({name, description, amount, itemId}){
  return function(dispatch){
    //TODO user_id is hard-coded
    axios.post(`${API_URL}/payments`, {name, description, amount, item_id: itemId, user_id: 1}, {
      headers: { authorization: localStorage.getItem('token')}
    } )
    .then(response => {
      dispatch({
        type: ITEM_GET,
        payload: response.data
      })
    })
    .catch(error => {

    })
  }
}
