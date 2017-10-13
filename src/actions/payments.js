import axios from 'axios'
import { API_URL } from '../settings'
import { ITEM_GET } from './types'

export function addPayment({name, description, itemId}){
  return function(dispatch){
    axios.post(`${API_URL}/payments`, {name, description, item_id: itemId}, {
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
