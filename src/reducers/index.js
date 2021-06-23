import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  modal: modalReducer,
  user: userReducer,
});
