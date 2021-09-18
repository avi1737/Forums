import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { loadState, saveState } from "./localstorage";
// Import custom components
import reducers from "../reducers/index";

let persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  compose(
    applyMiddleware(thunkMiddleware, logger),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension
      ? window.devToolsExtension()
      : function (f) {
          return f;
        }
  )
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  saveState(state);
});

export default store;
