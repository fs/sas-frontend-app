import { useEffect, useState } from "react";
import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const MainComponent = () => {
  const search = async (ingredient = "", caloriesLimit = 0) => {
    const trimmedIngredients = ingredient.replaceAll(",", "");

    if (ingredient.length < 1 || caloriesLimit < 1) return [];

    const result = await fetchRecipes(trimmedIngredients, caloriesLimit);

    return result;
  };

  const [ingredientText, setIngredient] = useState("");
  const [calories, setCalories] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [recipeList, setRecipeList] = useState(<RecipesList recipes={[]} />);

  const submit = async (event) => {
    event.preventDefault();
    const result = await search(ingredientText, calories);

    setRecipes(result);
  };

  useEffect(() => {
    const list = <RecipesList recipeList={recipes} />;
    setRecipeList(list);
  }, [recipes]);

  return (
    <MainDiv>
      <SearchBox
        submit={submit}
        setCalories={setCalories}
        setIngredient={setIngredient}
      />
      {recipeList}
    </MainDiv>
  );
};

export default MainComponent;
