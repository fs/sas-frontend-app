import styled from 'styled-components';
import defPic from '../img/default_pictire.png';

const Item = styled.div`
  width: 40%;
  padding: 1rem;
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px #666;
`;

const RecipeItem = ({ title, ingredients, image }) => {

  return (
    <Item>
      <h2>{title}</h2>

      <img src={image || defPic} alt="" />

      <h3>Ingredients:</h3>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
    </Item>
  );
};

export default RecipeItem;
