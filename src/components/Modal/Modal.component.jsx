import React from "react";
import "./Modal.styles.scss";

const Modal = ({ show, close }) => {
  if (!show) return null;

  return (
    <div className="Modal">
      <div className="modal-content">
        <i className="fa fa-times" onClick={close} />
      </div>
    </div>
  );
};

export default Modal;
