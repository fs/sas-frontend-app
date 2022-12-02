import React from "react";
import { ModalContainer, ModalImage } from "./styles";

const RecipeModalWindow = ({ modalInfo }) => {
  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <h2>Test</h2>
      <ModalImage />
      <div>
        <p>Ingredients</p>
        <p>{modalInfo}</p>
      </div>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
