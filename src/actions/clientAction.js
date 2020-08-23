import { GET_ALL_CLIENTS, ADD_CLIENT, GET_CORRENT_USER } from "./types";
import Axios from "axios";

/* get all user */
export const getAllClients = (payload) => ({
  type: GET_ALL_CLIENTS,
  payload,
});

export function getallclientsfromDB() {
  return (dispatch) =>
    Axios.get("http://localhost:4000/client/getallclients").then((res) => {
      dispatch(getAllClients(res.data));
      console.log("données recuperer depuis la base de donnéees");
    });
}

// add  client
export const addclient = (payload) => ({
  type: ADD_CLIENT,
  payload,
});

export function addclienttoDB(client) {
  return (dispatch) =>
    Axios.post("http://localhost:4000/client/addclient", client).then((res) => {
      dispatch(addclient(res.data));
      console.log("Client ajouter dans le base");
    });
}

//Update salon
export function updateClientinDB(id, client) {
  console.log(client);
  return () =>
    Axios.put("http://localhost:4000/client/update/" + id, client, {
      withCredentials: true,
    }).then((res) => console.log(res.data));
}

// Get one Client

export const GetCurrentUSer = (payload) => ({
  type: GET_CORRENT_USER,
  payload,
});

export function GetoneclientFromDB(id) {
  return (dispatch) =>
    Axios.get("http://localhost:4000/client/getOneClient/" + id, {
      withCredentials: true,
    }).then((res) => dispatch(GetCurrentUSer(res.data)));
}
