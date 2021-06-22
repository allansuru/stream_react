import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Stream from "../../interfaces/stream";
import { showModal, hideModal } from "../../actions";
import Modal from "../Modal";

export default function UserList() {
  const streams: Stream[] = useSelector((state: any) => state.streams);
  const { isSignedIn } = useSelector((state: any) => state.auth);
  const { modal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(streams);
  //   }, []);

  console.log(streams);
  console.log(isSignedIn);

  const showModalHandler = () => {
    dispatch(showModal());
  };

  const hideModalHandler = () => {
    dispatch(hideModal());
  };

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <button onClick={showModalHandler} className="ui button primary">
            Create User
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <h1>USER LIST</h1>
      {renderCreate()}
      {modal ? (
        <Modal
          title="Create User"
          content={null}
          actions={null}
          onDismiss={() => hideModalHandler()}
        />
      ) : null}
    </>
  );
}
