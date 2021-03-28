import { put, takeEvery,all } from 'redux-saga/effects'
import {dataFetched} from '../Action/DataAction'
import {cartFetched} from '../Action/CartAction'

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

export default function* rootSaga(){
  yield all([
    getDataWatch(),
    cartAddWatch()
  ])
}