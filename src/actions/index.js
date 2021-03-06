import api from "../apis/streams";
import history from "../history";
import { toast } from "react-toastify";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  SHOW_MODAL,
  HIDE_MODAL,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const createUser = (formValues) => async (dispatch) => {
  const response = await api.post("/users", { ...formValues });

  dispatch({ type: CREATE_USER, payload: response.data });

  dispatch(hideModal());
  toast.success("Usuário adicionado com sucesso!");
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await api.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS });
  try {
    const response = await api.get("/users");
    if (response.status === 200) {
      dispatch({ type: FETCH_USERS_SUCCESS, data: response.data });
    }
  } catch (err) {
    dispatch({ type: FETCH_USERS_ERROR, error: err.message });
    toast.error("Erro ao listar o usuarios");
  }
};

export const fetchStreams = () => async (dispatch) => {
  try {
    const response = await api.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data });
  } catch (err) {
    toast.error("Erro ao listar o steams");
  }
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await api.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await api.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await api.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
