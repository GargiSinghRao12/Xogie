import * as ApiUrl from './ApiUrl';

const BASE_URL = ApiUrl.URL + 'api/v1/user/';

export const API_METHOD_TYPE_GET = 'GET';
export const API_METHOD_TYPE_POST = 'POST';

//1 Login
export const API_URL_LOGIN = BASE_URL + 'login';
export const API_ID_LOGIN = '2';
export const API_LOGIN_SUCCESS = 'api_login_success';
export const API_LOGIN_FAILURE = 'api_login_failure';
export const API_LOGIN_CLEAR = 'api_login_clear';

