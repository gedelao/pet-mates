import { applyMiddleware, createStore } from "redux";
import { acceptedReducer } from "./accepted/reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { rejectedReducer } from "./rejected/reducers";

// combineReducer will take our reducer from accepted/rejected to separate them into their specific category
const rootReducer = combineReducers({
  accepted: acceptedReducer,
  rejected: rejectedReducer,
});

const defaultState = {
  accepted: undefined,
  rejected: undefined,
};

// storing users info in local storage
const localCache = (store) => (next) => (action) => {
  next(action);
  const state = store.getState();
  console.log(state);
  localStorage.setItem("pet", JSON.stringify(state));
};

export const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem("pet")) || defaultState,
  composeWithDevTools(applyMiddleware(localCache))
);
