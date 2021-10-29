import { ACTIVATE_CONNECTION, ACTIVATE_FOLLOWERS, ACTIVATE_FOLLOWINGS, ACTIVATE_POSTS } from "../constant/actionTypes";

const initialState = {
    activeTab : "POSTS"
}

function profileTabReducer(state = initialState, action){
    switch(action.type){
        case ACTIVATE_POSTS:
            return {
                ...state,
                activeTab : "POSTS"
            }
        case ACTIVATE_CONNECTION:
            return {
                ...state,
                activeTab : "CONNECTIONS"
            }
        case ACTIVATE_FOLLOWERS:
            return {
                ...state,
                activeTab : "FOLLOWERS"
            }
        case ACTIVATE_FOLLOWINGS:
            return {
                ...state,
                activeTab : "FOLLOWINGS"
            }
        default:
            return {
                ...state
            }
    }
}

export default profileTabReducer;