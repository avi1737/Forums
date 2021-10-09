import {
  SET_LOGIN_FLAG,
  SET_USER_DATA,
  SET_USER_AUTHTOKEN,
  CLEAR_AUTH,
  LOGIN_REQUEST
} from "../constant/actionTypes";

const initialState = {
    user : null ,
    token : null ,
    isLogin : false,
    status : "Sign in"
}

function loginReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                status : "Signing in.."
            }
        case SET_LOGIN_FLAG:
            return {
                ...state,
                isLogin : true
            }
        case SET_USER_DATA:
            return {
                ...state,
                user : action.payload
            }
        case SET_USER_AUTHTOKEN:
            return {
                ...state,
                token : action.payload
            }
        case CLEAR_AUTH:
            return {
                ...state,
                user : null ,
                token : null ,
                isLogin : false
            }
        default:
            return state
    }
}

export default loginReducer;
