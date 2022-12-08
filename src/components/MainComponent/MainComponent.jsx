import { useEffect, useState } from "react";
import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const MainComponent = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const initializeWithRandomRecipes = async () => {
      setRecipes(await fetchRecipes({}));
    };

    initializeWithRandomRecipes();
  }, []);

  return (
    <MainDiv>
      <SearchBox onSubmit={setRecipes} />
      <RecipesList recipes={recipes} />
    </MainDiv>
  );
};

export default MainComponent;
