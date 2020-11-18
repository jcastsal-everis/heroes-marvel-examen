import React from "react";
import ReactDOM from "react-dom";
import "../../styles/Modal.css";

export default ({ modalIsOpen, onCloseModal, children }) => {
  const containerModal = document.getElementById("modal");
  if (!modalIsOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <button onClick={onCloseModal} className="modal-close-button">
          x
        </button>
        {children}
      </div>
    </div>,
    containerModal
  );
};
