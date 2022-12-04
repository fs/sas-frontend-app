import React from "react";
import {
  ModalContainer,
  ModalImage,
  CloseButton,
  ButtonWrapper,
} from "./styles";
import closeButtonIcon from "../../icons/closeButtonIcon.svg";

const RecipeModalWindow = ({ recipeData, customOnClick }) => {
  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <ButtonWrapper>
        <CloseButton onClick={customOnClick}>
          <img src={closeButtonIcon} alt="closeBUtton" />
        </CloseButton>
      </ButtonWrapper>

      <ModalImage src={recipeData?.image} />
      <div>
        <p>Ingredients</p>
        <p>test</p>
      </div>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
