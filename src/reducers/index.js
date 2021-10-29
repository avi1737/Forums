import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";
import profileTabReducer from "./ProfileTabReducer";

const reducers = combineReducers({
    loginReducer : loginReducer,
    postsReducer : postReducer,
    commentReducer : commentReducer,
    profileTabReducer : profileTabReducer
});

export default reducers;
