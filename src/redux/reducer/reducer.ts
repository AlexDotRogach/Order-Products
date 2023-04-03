import { filtersReducer } from "./filtersReducer";
import { ordersReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  filter: filtersReducer,
  order: ordersReducer,
  product: productReducer,
});
