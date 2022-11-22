import { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
import fetchRecipes from '../api/fetchRecipes';

import { List } from './styles';

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipesList = async () => {
      try {
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('I failed', error);
        setError(error);
      }
    };

    fetchRecipesList()
  }, [])

  if (error) {
    return (
      <div>
        Ошибка получения данных
      </div>
    )
  }

  return (
    <List>
      {recipes.map(( { recipe }) => (
        <RecipeItem
          key={recipe.label}
          title={recipe.label}
          ingredients={recipe.ingredientLines}
          image={recipe.image}
        />
      ))}
    </List>
  );
}

export default RecipesList;
