import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";

const reducers = combineReducers({
    loginReducer : loginReducer,
    postsReducer : postReducer,
    commentReducer : commentReducer
});

export default reducers;
