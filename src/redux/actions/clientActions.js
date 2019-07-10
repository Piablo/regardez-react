import * as types from "./actionTypes";
import * as clientApi from "../../api/clientApi";

export function loadClientSuccess(clients) {
  return { type: types.LOAD_CLIENTS_SUCCESS, clients };
}

export function loadClients() {
  return function(dispatch) {
    return clientApi
      .getClients()
      .then(clients => {
        dispatch(loadClientSuccess(clients));
      })
      .catch(error => {
        throw error;
      });
  };
}
