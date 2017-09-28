import { API_URL } from '../settings'
import axios from 'axios'
import { ITEMS_TABLE } from './types'

export function items_table(){
  return function(dispatch){
    axios.get(`${API_URL}/users/1/items`, {
       headers:{authorization: localStorage.getItem('token')}
    })
    .then( response => {
      dispatch({
        type: ITEMS_TABLE,
        payload: response.data
      })
    })
  }
}
