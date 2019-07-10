import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
