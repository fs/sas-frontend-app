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
  const totalWeight = recipeData?.totalWeight ? recipeData.totalWeight : 1;
  const KCAL = recipeData?.nutrients.ENERC_KCAL.quantity
    ? recipeData.nutrients.ENERC_KCAL.quantity
    : 0;

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
            <h4 key={ingredient}>
              {index + 1}. {ingredient}
            </h4>
          ))}
        </Ingredients>
        <AdditionalInfo>
          <p>Cooking time: {recipeData?.cookingTime}</p>
          <p>Cuisine: {recipeData?.cuisineType}</p>
          <p>Dish type: {recipeData?.dishType}</p>
          <p>Nutrients per 100 gram:</p>
          <p>
            Calories: {Math.round((KCAL / totalWeight) * 100)}{" "}
            {recipeData?.nutrients.ENERC_KCAL.unit}
          </p>
        </AdditionalInfo>
      </InfoWrapper>
    </ModalContainer>
  );
};

export default RecipeModalWindow;
