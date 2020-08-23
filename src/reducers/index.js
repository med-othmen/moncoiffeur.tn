import { combineReducers } from "redux";
import SalontReducer from "./salonsReducers";
import clienReducer from "./clientReducers";
import CurrentUSerReducer from "./CurrentUSerReducer";
import meettReducer from "./meetReducers";
const allReducers = combineReducers({
  salons: SalontReducer,
  clients: clienReducer,
  CorruntUSer: CurrentUSerReducer,
  meets: meettReducer,
});

export default allReducers;
