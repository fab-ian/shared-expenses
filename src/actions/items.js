import { API_URL } from '../settings'
import axios from 'axios'
import { ITEMS_TABLE, ITEM_ADD, ITEM_GET, ITEM_ERROR } from './types'

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

export function item_add({name, description}){
  return function(dispatch){
    axios.post(`${API_URL}/users/items`, { name, description }, {
      headers:{authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: ITEM_ADD,
        payload: response.data
      })
    })
    .catch(error => itemsError(error.response.data.message))
  }
}

export function getItem(id) {
  return function(dispatch){
    axios.get(`${API_URL}/items/${id}`, { headers:{authorization: localStorage.getItem('token')}})
    .then(response => {
      dispatch(
        {
          type: ITEM_GET,
          payload: response.data
        }
      )
    })
  }
}

export function itemsError(message){
  return {
    type: ITEM_ERROR,
    payload: message
  }
}