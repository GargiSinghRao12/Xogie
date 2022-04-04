import * as Utils from '../utility';

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case Utils.ApiTypes.API_ID_LOGIN:
      return {...state, fetching: true, error: null};
    case Utils.ApiTypes.API_LOGIN_SUCCESS:
      return {...state, fetching: false, error: null, loginRes: action.payload};
    case Utils.ApiTypes.API_LOGIN_FAILURE:
      return {...state, fetching: false, error: action.error, loginRes: null};
    case Utils.ApiTypes.API_LOGIN_CLEAR:
      return {
        ...state,
        fetching: false,
        error: action.error,
        loginRes: undefined,
      };

    default:
      return state;
  }
}
