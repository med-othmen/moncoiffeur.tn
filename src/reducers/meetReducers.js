import { GET_ALL_MEETS } from "../actions/types";
const initialState = [];

export default function meettReducer(state = initialState, action) {
  if (action.type === GET_ALL_MEETS) {
    return action.payload;
  }

  return state;
}
