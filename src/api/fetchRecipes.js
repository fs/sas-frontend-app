import apiInstance from "./apiInstance";

const apiID = process.env.REACT_APP_RECIPES_APP_ID;
const apiKey = process.env.REACT_APP_RECIPES_APP_KEY;

const recipesUrl = "/recipes/v2";

const fetchRecipes = async ({ ingredients = "", calories }) => {
  const params = {
    app_id: apiID,
    app_key: apiKey,
    type: "public",
    random: true,
    diet: "low-fat",
    q: ingredients,
    calories: calories ? `0-${calories}` : "",
  };

  const data = await apiInstance.get(recipesUrl, { params });

  return data?.data?.hits;
};

export default fetchRecipes;
