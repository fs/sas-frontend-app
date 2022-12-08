import { useEffect, useState } from "react";
import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const search = async ({ ingredients = "", caloriesLimit = 0 }) => {
  try {
    if (ingredients.length < 1 || caloriesLimit < 1) return [];

    return await fetchRecipes(ingredients, caloriesLimit);
  } catch {
    return [];
  }
};

const MainComponent = () => {
  const [ingredientText, setIngredient] = useState("");
  const [calories, setCalories] = useState("");
  const [recipes, setRecipes] = useState([]);

  const submit = async (event) => {
    event.preventDefault();
    const result = await search({
      ingredient: ingredientText,
      caloriesLimit: calories,
    });

    setRecipes(result);
  };

  useEffect(() => {
    const initializeWithRandomRecipes = async () => {
      setRecipes(await fetchRecipes());
    };

    initializeWithRandomRecipes();
  }, []);

  return (
    <MainDiv>
      <SearchBox
        submit={submit}
        setCalories={setCalories}
        setIngredient={setIngredient}
      />
      <RecipesList recipes={recipes} />
    </MainDiv>
  );
};

export default MainComponent;
