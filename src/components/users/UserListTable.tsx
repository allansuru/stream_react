import React from "react";
import User from "interfaces/user";

export default function UserListTable(users: User[], loading: boolean) {
  return <>{render(users)}</>;
}

const render = (users: User[]) => {
  debugger;
  if (!users.length) {
    return (
      <div className="ui segment">
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }

  return users.map((user) => {
    return (
      <div className="ui celled list">
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">{user.name}</a>
            <div className="description">{user.address}</div>
          </div>
        </div>
      </div>
    );
  });
};
