import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
// Import custom components
import reducers from "../reducers/index";

//Redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['loginReducer'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducers);

//let persistedState = loadState();

const store = createStore(
  pReducer,
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

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state);
//   saveState(state);
// });

// export default store;

const persistor = persistStore(store);
export { persistor, store };