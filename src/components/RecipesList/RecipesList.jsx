import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeItem from "../RecipeItem";
import fetchRecipes from "../../api/fetchRecipes";
import ModalWindow from "../ModalWindow";
import RecipeItemModal from "../RecipeItemModal";

import List from "./styles";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchRecipesList = async () => {
      try {
        const recipesData = await fetchRecipes();
        const recipesList = mapApiResult(recipesData);
        const reducedRecipesList = reduceMappedResult(recipesList);

        setRecipes(reducedRecipesList);
      } catch (err) {
        console.error("I failed", err);
        setError(err);
      }
    };

    fetchRecipesList();
  }, []);

  if (error) {
    return <div>Ошибка получения данных</div>;
  }

  return (
    <List>
      <ModalWindow
        showModal={showModal}
        customOnClick={() => setShowModal(false)}
      >
        <RecipeItemModal
          recipeData={recipes[recipeID]}
          customOnClick={() => setShowModal(false)}
        />
      </ModalWindow>
      {Object.keys(recipes).map((key) => (
        <RecipeItem
          key={key}
          id={key}
          title={recipes[key].label}
          image={recipes[key].image}
          cookingTime={recipes[key].cookingTime}
          dishType={recipes[key].dishType}
          recipeData={setModalData}
        />
      ))}
    </List>
  );
};

export default RecipesList;
