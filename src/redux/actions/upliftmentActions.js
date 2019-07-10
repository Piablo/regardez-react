import * as types from "./actionTypes";
import * as upliftmentApi from "../../api/upliftmentApi";

export function createUpliftment(upliftment) {
  return { type: types.CREATE_UPLIFTMENT, upliftment };
}

export function loadUpliftmentsSuccess(upliftments) {
  return { type: types.LOAD_UPLIFTMENT_SUCCESS, upliftments };
}

export function loadUpliftments() {
  return function(dispatch) {
    return upliftmentApi
      .getUpliftments()
      .then(upliftments => {
        dispatch(loadUpliftmentsSuccess(upliftments));
      })
      .catch(error => {
        throw error;
      });
  };
}
