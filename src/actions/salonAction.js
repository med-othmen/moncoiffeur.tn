import { GET_ALL_SALONS, ADD_SALON, GET_CORRENT_USER } from "./types";
import Axios from "axios";

/* get all salons */
export const getAllSalons = (payload) => ({
  type: GET_ALL_SALONS,
  payload,
});
//get all salons from db
export function getAllSalonsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/pro/getallsalons", {
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      dispatch(getAllSalons(res.data));
    });
}
// add  salon
export const addsalon = (payload) => ({
  type: ADD_SALON,
  payload,
});
//add salon to database
export function addsalontoDB(salon) {
  console.log(salon);
  return (dispatch) =>
    Axios.post("http://localhost:4000/pro/addsalon", salon, {
      withCredentials: true,
    }).then((res) => {
      dispatch(addsalon(res.data));
      alert(res.data);
    });
}
//Update salon
export function updateSaloninDB(id, salon) {
  return () =>
    Axios.put("http://localhost:4000/pro/update/" + id, salon, {
      withCredentials: true,
    }).then((res) => console.log(res.data));
}

// Get one Client

export const GetCurrentUSer = (payload) => ({
  type: GET_CORRENT_USER,
  payload,
});

export function GetoneProFromDB(id) {
  return (dispatch) =>
    Axios.get("http://localhost:4000/pro/getOnePro/" + id, {
      withCredentials: true,
    }).then((res) => {
      dispatch(GetCurrentUSer(res.data));
    });
}
