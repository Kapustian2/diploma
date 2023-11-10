import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer, productReducer, productsReducer } from "./reducers";

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  products: productsReducer,
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(thunk))
);
