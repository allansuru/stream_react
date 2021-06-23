import _ from "lodash";
import { CREATE_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      debugger;
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
