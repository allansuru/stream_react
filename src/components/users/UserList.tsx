import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal, fetchStreams, fetchUsers } from "../../actions";
import Modal from "../Modal";
import UserCreate from "./UserCreate";
import UserListTable from "./UserListTable";

export default function UserList() {
  const { isSignedIn } = useSelector((state: any) => state.auth);
  const { payload: streams } = useSelector((state: any) => state.streams);
  const { modal } = useSelector((state: any) => state.modal);
  const { data: users, loading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }

    if (!streams) {
      dispatch(fetchStreams());
    }
  }, []);

  console.log(isSignedIn);

  const showModalHandler = () => {
    dispatch(showModal());
  };

  const hideModalHandler = () => {
    dispatch(hideModal());
  };

  const renderCreate = () => {
    // if (isSignedIn) {
    return (
      <div style={{ textAlign: "right" }}>
        <button onClick={showModalHandler} className="ui button primary">
          Create User
        </button>
      </div>
    );
    // }
  };

  return (
    <>
      <h1>USER LIST</h1>
      {UserListTable(users, loading)}
      {renderCreate()}
      {modal ? (
        <Modal
          title="Create User"
          content={<UserCreate />}
          actions={null}
          onDismiss={() => hideModalHandler()}
        />
      ) : null}
    </>
  );
}
