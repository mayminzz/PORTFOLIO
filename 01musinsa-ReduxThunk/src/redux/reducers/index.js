import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import authenticateReducer from "./authenticatereducer";

export default combineReducers({
  product: ProductReducer,
  auth: authenticateReducer,
});
