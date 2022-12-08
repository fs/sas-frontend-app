import React from "react";
import {
  ModalImage,
  ImageWrapper,
  InfoWrapper,
  Ingredients,
  AdditionalInfo,
  ReceiptInfo,
  ReceiptContent,
} from "./styles";

const RecipeModalContent = ({ recipeData }) => {
  const totalWeight = recipeData?.totalWeight ? recipeData.totalWeight : 1;
  const KCAL = recipeData?.nutrients.ENERC_KCAL.quantity
    ? recipeData.nutrients.ENERC_KCAL.quantity
    : 0;

  return (
    <ReceiptContent>
      <h1>{recipeData?.label}</h1>

      <ReceiptInfo>
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
      </ReceiptInfo>
    </ReceiptContent>
  );
};

export default RecipeModalContent;
