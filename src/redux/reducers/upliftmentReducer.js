import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function upliftmentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_UPLIFTMENT:
      return [...state, { ...action.upliftment }];
    case types.LOAD_UPLIFTMENT_SUCCESS:
      return action.upliftments;
    default:
      return state;
  }
}
