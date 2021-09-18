import {
  SET_LOGIN_FLAG,
  SET_USER_DATA,
  SET_USER_AUTHTOKEN,
  SET_ROUTE_NAME,
  CLEAR_AUTH,
} from "../constant/actionTypes";

const initial_state = {
  loginFlag: false,
  loginUserData: null,
  authToken: null,
  routeName: null,
  loading: false,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_LOGIN_FLAG:
      return { ...state, loading: false, loginFlag: action.payload };

    case SET_USER_DATA:
      return { ...state, loading: false, loginUserData: action.payload };

    case SET_USER_AUTHTOKEN:
      return { ...state, loading: false, authToken: action.payload };

    case SET_ROUTE_NAME:
      return { ...state, loading: false, routeName: action.routeName };

    case CLEAR_AUTH:
      return {
        ...state,
        loginFlag: false,
        loginUserData: null,
        authToken: null,
      };
    default:
      return { ...state };
  }
};
