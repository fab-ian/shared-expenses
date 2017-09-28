import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import itemsReducer from './items'

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  items: itemsReducer
});

export default rootReducer
