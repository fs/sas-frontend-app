import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import RecipeItem from "../RecipeItem";
import ModalWindow from "../ModalWindow";
import RecipeModalContent from "../RecipeModalContent";

import List from "./styles";

const RecipesList = ({ recipes }) => {
  const [showModal, setShowModal] = useState(false);
  const [recipeID, setRecipeID] = useState(null);

  const setModalData = (productData) => {
    setRecipeID(productData);
    setShowModal(true);
  };

  const mapApiResult = (result) => {
    const mappedResult = result.map(({ recipe }) => ({
      id: uuidv4(),
      label: recipe.label,
      image: recipe.image,
      cookingTime:
        recipe.totalTime > 0 ? `${recipe.totalTime} minutes` : "Not available",
      dishType: recipe.dishType ? recipe.dishType[0] : "Not available",
      ingredients: recipe.ingredientLines,
      cuisineType: recipe.cuisineType,
      nutrients: recipe.totalNutrients,
      totalWeight: recipe.totalWeight,
    }));

    return mappedResult;
  };

  const reduceMappedResult = (mappedResult) => {
    const reducedResult = mappedResult.reduce((newObj, objInArray) => {
      const { id, ...rest } = objInArray;
      return {
        ...newObj,
        [objInArray.id]: rest,
      };
    }, {});

    return reducedResult;
  };

  const reducedRecipesList = reduceMappedResult(mapApiResult(recipes));

  return (
    <List>
      <ModalWindow
        showModal={showModal}
        customOnClick={() => setShowModal(false)}
      >
        <RecipeModalContent
          recipeData={reducedRecipesList[recipeID]}
          customOnClick={() => setShowModal(false)}
        />
      </ModalWindow>
      {Object.keys(reducedRecipesList).map((key) => (
        <RecipeItem
          key={key}
          id={key}
          title={reducedRecipesList[key].label}
          image={reducedRecipesList[key].image}
          cookingTime={reducedRecipesList[key].cookingTime}
          dishType={reducedRecipesList[key].dishType}
          recipeData={setModalData}
        />
      ))}
    </List>
  );
};

export default RecipesList;
