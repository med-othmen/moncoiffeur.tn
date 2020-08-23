import { ADD_CLIENT, GET_ALL_CLIENTS } from "../actions/types";
const initialState = [];

export default function clientReducer(state = initialState, action) {
  if (action.type === ADD_CLIENT) {
    return action.payload;
  }
  if (action.type === GET_ALL_CLIENTS) {
    return action.payload;
  }

  return state;
}
