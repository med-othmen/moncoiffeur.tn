import { GET_ALL_MEETS } from "./types";
import Axios from "axios";

/* get all user */
export const getAllMeets = (payload) => ({
  type: GET_ALL_MEETS,
  payload,
});

export function getallMeetsfromDB() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/meet/getallmeets").then((res) => {
      dispatch(getAllMeets(res.data));
      console.log("données recuperer depuis la base de donnéees");
    });
}
