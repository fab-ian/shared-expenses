import axios from 'axios'
import { AUTH_USER } from './types'
import { API_URL } from '../settings'
import history from '../history'

export function signinUser({ email, password }, Router){
  return function(dispatch){
    axios.post(`${API_URL}/auth/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })

        localStorage.setItem('token', response.data.auth_token)
        history.push('/')
      })
  }
}
