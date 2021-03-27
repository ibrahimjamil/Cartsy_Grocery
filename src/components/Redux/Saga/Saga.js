import { put, takeEvery,all } from 'redux-saga/effects'
import {dataLoading,dataFetched} from '../Action/Action'

function* getData(){
  let actionFetched=dataFetched()
  yield put({type:actionFetched.type})
}


function* getDataWatch(){
  yield takeEvery("getData",getData)
}

export default function* rootSaga(){
  yield all([
    getDataWatch()
  ])
}