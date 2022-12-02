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
  const [modalID, setModalID] = useState(null);

  const setModalData = (productData) => {
    setModalID(productData);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchRecipesList = async () => {
      try {
        const recipesData = await fetchRecipes();

        const recipesList = recipesData.map(({ recipe }) => ({
          id: uuidv4(),
          label: recipe.label,
          image: recipe.image,
          cookingTime: recipe.totalTime,
          dishTypes: recipe.dishType,
          ingredients: recipe.ingredientLines,
        }));

        const reducedRecipesList = recipesList.reduce((newObj, objInArray) => {
          const { id, ...rest } = objInArray;
          return {
            ...newObj,
            [objInArray.id]: rest,
          };
        }, {});

        // eslint-disable-next-line no-console
        console.log(reducedRecipesList);

        setRecipes(recipesList);
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
        <RecipeItemModal recipeData={modalID} />
      </ModalWindow>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.label}
          image={recipe.image}
          cookingTime={recipe.cookingTime}
          dishTypes={recipe.dishTypes}
          recipeData={setModalData}
        />
      ))}
    </List>
  );
};

export default RecipesList;
