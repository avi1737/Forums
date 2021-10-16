import { ADD_POST, DISLIKE_POST, FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, LIKE_POST } from "../constant/actionTypes";

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
        case ADD_POST:
            return {
                ...state,
                posts : [action.payload,...state.posts]
            }
        case LIKE_POST:
            return {
                ...state,
                posts : state.posts.map((post) => (
                    post.id === action.payload.postId 
                    ?
                    {
                        ...post,
                        userLikeList : [...post.userLikeList,action.payload.userId],
                        likesCount : post.likesCount + 1
                    }
                    :
                    {
                        ...post
                    }
                ))
            }
            case DISLIKE_POST:
                return {
                    ...state,
                    posts : state.posts.map((post) => (
                        post.id === action.payload.postId 
                        ?
                        {
                            ...post,
                            userLikeList : post.userLikeList.filter((user) => user !== action.payload.userId),
                            likesCount : post.likesCount - 1
                        }
                        :
                        {
                            ...post
                        }
                    ))
                }
        default:
            return {
                ...state
            }
    }
}

export default postReducer;