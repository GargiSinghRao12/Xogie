import {put, takeLatest, all} from 'redux-saga/effects';
import * as Utils from '../utility';
import callApis from '../services/apiCall';

export function* loginSaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_LOGIN_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_LOGIN_FAILURE});
  }
}
export function* loginOtpVerifictionSaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_OTP_VERIFICTION_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_OTP_VERIFICTION_FAILURE});
  }
}

export function* addBusinessDetailsSaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_ADD_BUSINESS_DETAILS_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_ADD_BUSINESS_DETAILS_FAILURE});
  }
}

export function* BusinessCategorySaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_BUSINESS_CATEGORY_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_BUSINESS_CATEGORY_FAILURE});
  }
}

export function* addWhatsAppDetailSaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_ADD_WHATSAPP_NUMBER_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_ADD_WHATSAPP_NUMBER_FAILURE});
  }
}

export function* WhatsAppNumberVerifictionSaga(action) {
  try {
    const data = yield callApis(action);
    yield put({type: Utils.ApiTypes.API_WHATSAPP_NUMBER_VERIFICTION_OTP_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Utils.ApiTypes.API_WHATSAPP_NUMBER_VERIFICTION_OTP_FAILURE});
  }
}
