import { put, takeEvery,all,select,call,take,cancel,fork,join, delay } from 'redux-saga/effects'
import {dataFetched} from '../Action/DataAction'
import {cartFetched,cartIncrement,cartDecrement} from '../Action/CartAction'
import {produce} from "immer"
import initialData from '../Products'

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
  let result=produce(initialData,newState=>{
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


function* authorize(user, password) {
  return yield {info:"hello "+user+" "+password}
}

function* SagaTesting(){
  while (true) {
    const {payload} = yield take ("DATA")
    const task = yield fork(authorize, payload.user, payload.password)
    const res = yield join(task)
    setTimeout (()=>{
      console.log("hello")
    },2000)
    console.log(res)
  }
}

export default function* RootSaga() {
  yield all([
    getDataWatch(),
    cartAddWatch(),
    cartQuantityI(),
    cartQuantityD(),
    ProductFilter(),
    ProductFilterbysub(),
    SagaTesting()
  ])
}