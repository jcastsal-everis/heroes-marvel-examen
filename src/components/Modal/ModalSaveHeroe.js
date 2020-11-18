import React from "react";
import Modal from "./Modal";
import "../../styles/ModalDeleteHeroe.css";

export default ({ modalIsOpen, onCloseModal, onRedirectToHeroes }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className="modaldeleteheroe">
        <h3>Mensaje</h3>
        <p>Guardado correctamente</p>
        <div>
          <button className="btn btn-daprimary" onClick={onRedirectToHeroes}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};
