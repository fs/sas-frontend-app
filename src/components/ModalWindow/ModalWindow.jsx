import React from "react";
import { ModalBackground, ModalContainer, ModalImage } from "./styles";

const ModalWindow = ({ showModal, customOnClick, modalParent }) => {
  // eslint-disable-next-line no-console
  console.log(modalParent);
  return (
    <ModalBackground showModal={showModal} onClick={customOnClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
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
