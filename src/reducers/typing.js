import { SET_TYPING_VALUE } from "../actions/constants/action-type";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    default:
      return state;
  }
}
