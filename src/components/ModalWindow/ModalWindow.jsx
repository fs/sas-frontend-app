import React from "react";
import { ModalBackground, ModalContainer, ModalImage } from "./styles";

const ModalWindow = (showModal, setShowModal) => {
  return (
    <ModalBackground showModal={showModal} onClick={() => setShowModal(false)}>
      <ModalContainer>
        <h2>Test</h2>
        <ModalImage />
        <div>
          <p>Ingredients</p>
          <p>Info</p>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalWindow;
