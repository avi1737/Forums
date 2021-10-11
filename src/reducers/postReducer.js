import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../constant/actionTypes";

const initialState = {
    posts : [],
    isLoading : false
}

function postReducer(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                posts : action.payload
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isLoading : false
            }
        default:
            return {
                ...state
            }
    }
}

export default postReducer;