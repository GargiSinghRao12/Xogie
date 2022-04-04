import * as Utils from '../utility';

////////////////////////////////////
export function loginAction(action) {
  return {
    type: Utils.ApiTypes.API_ID_LOGIN,
    method: Utils.ApiTypes.API_METHOD_TYPE_POST,
    url: Utils.ApiTypes.API_URL_LOGIN,
    payload: action,
  };
}

export function clearLoginAction() {
  return {
    type: Utils.ApiTypes.API_LOGIN_CLEAR,
  };
}

/////////////////////////////////////