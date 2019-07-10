import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/upliftments/";

export function getUpliftments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveUpliftment(upliftment) {
  return fetch(baseUrl + (upliftment.id || ""), {
    method: upliftment.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(upliftment)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUpliftment(upliftmentId) {
  return fetch(baseUrl + upliftmentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
