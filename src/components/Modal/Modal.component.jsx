import React from "react";
import "./Modal.styles.scss";

const Modal = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <div className="Modal">
      <div className="modal-content">
        <i className="fa fa-times" onClick={close} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
