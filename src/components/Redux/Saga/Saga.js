import { put, takeEvery,all,select } from 'redux-saga/effects'
import {dataFetched} from '../Action/DataAction'
import {cartFetched,cartIncrement,cartDecrement} from '../Action/CartAction'
import {produce} from "immer"

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
  console.log("saga filtering going")
  const data=yield select(state=>state.dataReducer)
  let globalState=data
  let result=produce(globalState,newState=>{
          return newState.filter(product=>product.categoriesId===payload.CategoryID)
  })
  yield put({type:"Get_Product_By_Category",payload:result})
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

export default function* RootSaga() {
  const state=yield select(state => state.dataReducer)
  yield all([
    getDataWatch(),
    cartAddWatch(),
    cartQuantityI(),
    cartQuantityD(),
    ProductFilter(),
    ProductFilterbysub()
  ])
}