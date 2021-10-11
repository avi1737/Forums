import { FETCH_COMMENT_ERROR, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS } from "../constant/actionTypes";

const initialState = {
    comments : [],
    isLoading : false
}

function commentReducer(state=initialState, action){
    switch(action.type){
        case FETCH_COMMENT_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading : false,
                comments : [...state.comments,...action.payload]
            }
        case FETCH_COMMENT_ERROR:
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

export default commentReducer;