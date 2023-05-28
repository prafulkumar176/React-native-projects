import {API_CALL, SHOW_API_DATA} from '../components/Redux/Action/actionName';
import {put, takeEvery} from 'redux-saga/effects';

export interface ResponseGenerator {
  json(): unknown;
}

function* getActionType() {
  let data: ResponseGenerator = yield fetch('https://dummyjson.com/products');
  data = yield data.json();

  console.log(data);
  yield put({type: SHOW_API_DATA, data: data});
}

function* Apisaga() {
  yield takeEvery(API_CALL, getActionType);
}

export default Apisaga;
