import { put, takeEvery,all } from 'redux-saga/effects'
import {dataFetched} from '../Action/DataAction'
import {cartFetched,cartIncrement,cartDecrement} from '../Action/CartAction'
import { yellow } from '@material-ui/core/colors'

function* getData(){
  let dataActionFetched=dataFetched()
  yield put({type:dataActionFetched.type})
}
function* getDataWatch(){
  yield takeEvery("getData",getData)
}

function* CartAdd({data}){
  let cartActionFetched=cartFetched()
  yield put({type:cartActionFetched.type,payload:data})
}
function* cartAddWatch(){
  yield takeEvery("cartAdd",CartAdd)
}

function* incrementQ({index}){
  let incAction=cartIncrement()
  yield put({type:incAction.type,payload:index})
}
function* cartQuantityI(){
  yield takeEvery("increment_quantity",incrementQ)
}

function* decrementQ({data}){
  let incAction=cartDecrement()
  yield put({type:incAction.type,payload:data})
}
function* cartQuantityD(){
  yield takeEvery("decrement_quantity",decrementQ)
}

function* categoryproducts({payload}){
  yield put({type:"Get_Product_By_Category",payload:payload})
}

function* ProductFilter(){
  yield takeEvery("CategoryProduct",categoryproducts)
}

function* subcategoryproducts({payload}){
  yield put({type:"Get_Product_By_Category_and_subCategory",payload:payload})
}

function* ProductFilterbysub(){
  yield takeEvery("CategoryProductBySubCategory",subcategoryproducts)
}

export default function* rootSaga(){
  yield all([
    getDataWatch(),
    cartAddWatch(),
    cartQuantityI(),
    cartQuantityD(),
    ProductFilter(),
    ProductFilterbysub()
  ])
}