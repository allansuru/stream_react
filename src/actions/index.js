import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  debugger;
  const { userId } = getState().auth;

  const { status, data } = await streams.post("/streams", {
    ...formValues,
    userId
  });

  dispatch({
    type: CREATE_STREAM,
    payload: data
  });

  if (status === 201) {
    history.push("/");
  }
};

export const fetchStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: data
  });
};

export const fetchStreams = () => async dispatch => {
  const { data } = await streams.get("/streams");
  debugger;
  dispatch({
    type: FETCH_STREAMS,
    payload: data
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const { data } = await streams.put(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: data
  });
};

export const deleteStream = id => async dispatch => {
  const deletePath = `/streams/${id}`;

  await streams.delete(deletePath);

  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
};
