/* eslint-disable react/self-closing-comp */
import React from "react";
import {
  ModalContainer,
  ModalImage,
  CloseButton,
  ButtonWrapper,
  ImageWrapper,
  InfoWrapper,
  Ingredients,
  AdditionalInfo,
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

      <h1>{recipeData?.label}</h1>

      <ImageWrapper>
        <ModalImage src={recipeData?.image} />
      </ImageWrapper>

      <InfoWrapper>
        <Ingredients>
          <h2>Ingredients</h2>
          {recipeData?.ingredients.map((ingredient, index) => (
            <h3 key={ingredient}>
              {index + 1}. {ingredient}
            </h3>
          ))}
        </Ingredients>
        <AdditionalInfo></AdditionalInfo>
      </InfoWrapper>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
