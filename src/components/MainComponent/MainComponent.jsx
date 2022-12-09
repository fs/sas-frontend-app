import { useEffect, useState } from "react";
import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const MainComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const getRecipes = async ({ ingredients, calories }) => {
    try {
      const recipesResult = await fetchRecipes({ ingredients, calories });
      setRecipes(recipesResult);
    } catch (err) {
      setError(true);
      setRecipes([]);
    }
  };

  useEffect(() => {
    getRecipes({});
  }, []);

  const onSubmit = async ({ ingredients, calories, validationResult }) => {
    setError(false);
    if (validationResult.valid) {
      getRecipes({ ingredients, calories });
    } else {
      setValidationErrors(validationResult.errors);
    }
  };

  return (
    <MainDiv>
      <SearchBox onSubmit={onSubmit} validationErrors={validationErrors} />

      {error ? (
        <div data-testid="error-container">Ошибка получения данных</div>
      ) : (
        <RecipesList recipes={recipes} />
      )}
    </MainDiv>
  );
};

export default MainComponent;
