import { combineReducers } from 'redux'
import dataReducer from '../Reducer/DataReducer'
import cartReducer from '../Reducer/CartReducer'

export default combineReducers({
  dataReducer,
  cartReducer
})
