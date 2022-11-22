import apiInstance from './apiInstance';

const apiID = process.env.REACT_APP_RECIPES_APP_ID;
const apiKey = process.env.REACT_APP_RECIPES_APP_KEY;

const recipesUrl = "/recipes/v2";
const ingr = '';

const fetchRecieps = async () => {
  const params = {
    app_id: apiID,
    app_key: apiKey,
    type: "public",
    random: true,
    diet: "low-fat",
    q: ingr
  }

  const data = await apiInstance.get(recipesUrl, { params } );

  return data?.data?.hits;
}

export default fetchRecieps;
