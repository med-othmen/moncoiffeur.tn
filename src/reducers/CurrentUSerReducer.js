import { GET_CORRENT_USER } from "../actions/types";
const initialState = {};

export default function clientReducer(state = initialState, action) {
  if (action.type === GET_CORRENT_USER) {
    return action.payload;
  }

  return state;
}
