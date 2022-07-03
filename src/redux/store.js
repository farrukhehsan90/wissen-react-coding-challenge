import * as redux from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "./Reducer/AuthReducer";
import UsersReducer from "./Reducer/UsersReducer";
import storage from "redux-persist/lib/storage";

const combineReducer = redux.combineReducers;
const persistConfig = {
  key: "root",
  storage: storage,
};
const rootReducer = combineReducer({
  auth: AuthReducer,
  users: UsersReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = redux.createStore(
  persistedReducer,
  redux.applyMiddleware(promise, thunk)
);

export const persistor = persistStore(store);
