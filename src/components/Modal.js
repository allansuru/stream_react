import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, onDismiss }) =>
  ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <i
        style={Styles.icon}
        className="close inside icon"
        onClick={onDismiss}
      ></i>

      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );

const Styles = {
  container: {
    display: "flex",
  },
  icon: {
    zIndex: 99999,
    cursor: "pointer",
    fontSize: "25px",
    position: "relative",
    bottom: "170px",
    left: "460px",
  },
};

export default Modal;
