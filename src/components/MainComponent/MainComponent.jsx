import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const MainComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);

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

  const getRecipes = async ({ ingredients, calories }) => {
    try {
      const recipesResult = await fetchRecipes({ ingredients, calories });
      const mappedRecipes = reduceMappedResult(mapApiResult(recipesResult));
      setRecipes(mappedRecipes);
    } catch (err) {
      setError(true);
      setRecipes([]);
    }
  };

  useEffect(() => {
    getRecipes({});
  }, []);

  const onSubmit = async ({ ingredients, calories }) => {
    setError(false);
    getRecipes({ ingredients, calories });
  };

  return (
    <MainDiv>
      <SearchBox onSubmit={onSubmit} />

      {error ? (
        <div data-testid="error-container">Ошибка получения данных</div>
      ) : (
        <RecipesList recipes={recipes} />
      )}
    </MainDiv>
  );
};

export default MainComponent;
