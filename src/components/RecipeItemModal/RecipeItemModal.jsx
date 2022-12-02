import React from "react";
import { ModalContainer, ModalImage } from "./styles";

const RecipeModalWindow = ({ recipeData }) => {
  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <h2>Test</h2>
      <ModalImage />
      <div>
        <p>Ingredients</p>
        <p>{recipeData}</p>
      </div>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
