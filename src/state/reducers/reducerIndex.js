import { combineReducers } from "redux";
import Reducer from "./amountReducer";

const reducers = combineReducers({
  amount: Reducer,
});

export default reducers;
