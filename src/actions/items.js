import { API_URL } from '../settings'
import axios from 'axios'
import { ITEMS_TABLE, ITEM_ADD } from './types'

export function items_table(){
  return function(dispatch){
    axios.get(`${API_URL}/users/items`, {
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

export function item_add(options){
  return function(dispatch){
    axios.post(`${API_URL}/users/items`, { name: options.name, description: options.description }, {
      headers:{authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: ITEM_ADD,
        payload: response.data
      })
    })
  }
}
