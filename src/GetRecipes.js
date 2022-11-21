import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import RecipeData from './components/RecipeData';

function GetRecipes() {

  var ingr='';
  //ask user to write ingredients

  const apiURL = 'https://api.edamam.com/api/recipes/v2';

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState();
  const getRecipes = async (ingr) => {
    await axios.get(apiURL, {
      params:
      {
        app_id: '93c6f918',
        app_key: '8a3edd882d3a82ad6b32a0d3afd513ac',
        type: 'public',
        random: true,
        diet: 'low-fat',
        q:ingr
      }
    })
      .then((resp) => {
        setRecipes((resp.data.hits));
        console.log((resp));
        console.log((resp.data.hits));
      })
      .catch(error => {
        if (error.response)
          console.error('I failed', error);
        setError(error);

      })
  }

  useEffect(() => {
    getRecipes(ingr);
  }, [query]);

  if (error)
    return (
      <div>
        Ошибка получения данных
      </div>
    )

  return (

    <div>
      {recipes.map((recipe) => (
        <RecipeData
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredientLines}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default GetRecipes;
