import RecipeItem from "../RecipeItem";
import List from "./styles";

const RecipesList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(({ recipe }) => (
        <RecipeItem
          key={recipe.label}
          title={recipe.label}
          image={recipe.image}
          cookingTime={recipe.totalTime}
          dishTypes={recipe.dishType}
        />
      ))}
      ;
    </List>
  );
};

export default RecipesList;
