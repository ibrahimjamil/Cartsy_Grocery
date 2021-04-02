import { combineReducers } from 'redux'
import dataReducer from '../Reducer/DataReducer'
import cartReducer from '../Reducer/CartReducer'
import CategoryReducer from '../Reducer/CategoryReducer'
export default combineReducers({
  dataReducer,
  cartReducer,
  CategoryReducer
})
