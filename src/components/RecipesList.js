import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecipeItem from './RecipeItem';
import fetchRecipes from '../api/fetchRecipes';

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`;

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReciepsList = async () => {
      try {
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('I failed', error);
        setError(error);
      }
    };

    fetchReciepsList()
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
