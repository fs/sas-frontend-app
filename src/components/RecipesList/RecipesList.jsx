import React, { useEffect, useState } from "react";
import RecipeItem from "../RecipeItem";
import fetchRecipes from "../../api/fetchRecipes";
import ModalWindow from "../ModalWindow";

import List from "./styles";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRecipesList = async () => {
      try {
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
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
      />
      {recipes.map(({ recipe }) => (
        <RecipeItem
          key={recipe.label}
          title={recipe.label}
          image={recipe.image}
          cookingTime={recipe.totalTime}
          dishTypes={recipe.dishType}
          customOnClick={() => setShowModal(true)}
        />
      ))}
    </List>
  );
};

export default RecipesList;
