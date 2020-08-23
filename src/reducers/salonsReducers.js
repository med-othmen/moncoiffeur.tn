import { GET_ALL_SALONS } from "../actions/types";
const initialState = [];

export default function SalontReducer(state = initialState, action) {
  if (action.type === GET_ALL_SALONS) {
    return action.payload;
  }

  return state;
}
