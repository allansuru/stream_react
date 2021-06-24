import {
  CREATE_USER,
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_ERROR,
} from "../actions/types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USERS_SUCCESS:
      debugger;
      return { ...state, data: action.data, loading: false };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
