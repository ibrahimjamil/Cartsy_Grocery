import { put, takeEvery,all } from 'redux-saga/effects'
import {dataFetched} from '../Action/DataAction'
import {cartFetched,cartIncrement,cartDecrement} from '../Action/CartAction'

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

function* decrementQ({index}){
  let incAction=cartDecrement()
  yield put({type:incAction.type,payload:index})
}
function* cartQuantityD(){
  yield takeEvery("decrement_quantity",decrementQ)
}

export default function* rootSaga(){
  yield all([
    getDataWatch(),
    cartAddWatch(),
    cartQuantityI(),
    cartQuantityD()
  ])
}