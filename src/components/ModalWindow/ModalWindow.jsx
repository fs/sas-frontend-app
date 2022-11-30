import React from "react";
import { ModalBackground, ModalContainer, ModalImage } from "./styles";

const ModalWindow = (showModal) => {
  return (
    <ModalBackground showModal={showModal}>
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
