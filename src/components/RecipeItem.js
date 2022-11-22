import defPic from '../img/default_pictire.png';

import { ListItem  } from './styles';

const RecipeItem = ({ title, ingredients, image }) => {

  return (
    <ListItem>
      <h2>{title}</h2>

      <img src={image || defPic} alt="" />

      <h3>Ingredients:</h3>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
    </ListItem>
  );
};

export default RecipeItem;
