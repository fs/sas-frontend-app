import { useEffect, useState } from "react";
import RecipeItem from "../RecipeItem";
import fetchRecipes from "../../api/fetchRecipes";

import List from "./styles";

const RecipesList = (props) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  const { recipeList } = props;

  const createCards = async (cardRecipeList = []) => {
    const recipes =
      cardRecipeList.length > 0 ? cardRecipeList : await fetchRecipes();

    return recipes.map(({ recipe }) => (
      <RecipeItem
        key={recipe.label}
        title={recipe.label}
        image={recipe.image}
        cookingTime={recipe.totalTime}
        dishTypes={recipe.dishType}
      />
    ));
  };

  useEffect(() => {
    const updateCards = async () => {
      try {
        setCards(await createCards(recipeList));
      } catch (err) {
        console.error("I failed", err);
        setError(err);
      }
    };

    updateCards();
  }, [recipeList]);

  if (error) {
    return <div>Ошибка получения данных:</div>;
  }

  return <List>{cards}</List>;
};

export default RecipesList;
