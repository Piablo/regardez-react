import { combineReducers } from "redux";
import upliftments from "./upliftmentReducer";
import clients from "./clientReducer";

const rootReducer = combineReducers({
  upliftments,
  clients
});

export default rootReducer;
