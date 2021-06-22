import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Stream from "../../interfaces/stream";

export default function UserList() {
  const streams: Stream[] = useSelector((state: any) => state.streams);
  const { isSignedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(streams);
  //   }, []);

  console.log(streams);
  console.log(isSignedIn);

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="" className="ui button primary">
            Create User
          </Link>
        </div>
      );
    }
  };

  return (
    <>
      <h1>USER LIST</h1>
      {renderCreate()}
    </>
  );
}
