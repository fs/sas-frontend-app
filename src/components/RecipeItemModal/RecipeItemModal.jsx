import React from "react";
import { ModalContainer, ModalImage } from "./styles";

const RecipeModalWindow = ({ recipeData }) => {
  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <ModalImage src={recipeData?.image} />
      <div>
        <p>Ingredients</p>
        <p>test</p>
      </div>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
