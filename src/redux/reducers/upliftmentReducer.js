export default function upliftmentReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_UPLIFTMENT":
      return [...state, { ...action.upliftment }];
    default:
      return state;
  }
}
