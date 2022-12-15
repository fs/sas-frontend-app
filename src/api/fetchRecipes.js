import { v4 as uuidv4 } from "uuid";
import apiInstance from "./apiInstance";

const apiID = process.env.REACT_APP_RECIPES_APP_ID;
const apiKey = process.env.REACT_APP_RECIPES_APP_KEY;

const recipesUrl = "/recipes/v2";

const fetchRecipes = async ({ ingredients, calories = 5000 } = {}) => {
  const params = {
    app_id: apiID,
    app_key: apiKey,
    type: "public",
    random: true,
    diet: "low-fat",
    q: ingredients,
    calories: `0-${calories}`,
  };

  const data = await apiInstance.get(recipesUrl, { params });
  const recipes = data?.data?.hits || [];

  const reduceMappedResult = (result) => {
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

    return mappedResult.reduce((newObj, objInArray) => {
      return {
        ...newObj,
        [objInArray.id]: objInArray,
      };
    }, {});
  };

  return reduceMappedResult(recipes);
};

export default fetchRecipes;
