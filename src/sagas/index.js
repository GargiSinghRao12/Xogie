import {all, takeLatest} from 'redux-saga/effects';
import * as Utils from '../utility';
import {loginSaga} from './loginSaga';

function* watchLoginAction() {
  yield takeLatest(Utils.ApiTypes.API_ID_LOGIN, loginSaga);
}

function* rootSaga() {
  yield all([
    watchLoginAction(),
  ]);
}

export default rootSaga;
