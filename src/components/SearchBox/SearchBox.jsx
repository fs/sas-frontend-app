import { useState } from "react";
import fetchRecipes from "../../api/fetchRecipes";
import { SearchDiv, SearchTextInput, SearchInput } from "./styles";

const placeholderCaloriesLimit = 2000;
const placeholderIngredientList = "Chicken pineapple cream cheese";

const SearchBox = (props) => {
  const { onSubmit } = props;

  const [calories, setCalories] = useState("");
  const [ingredientText, setIngredient] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    onSubmit(await fetchRecipes({ ingredients: ingredientText, calories }));
  };

  return (
    <SearchDiv>
      <form onSubmit={submit}>
        <SearchTextInput
          value={ingredientText}
          placeholder={placeholderIngredientList}
          onInput={(e) => setIngredient(e.target.value)}
          width={400}
        />
        <SearchTextInput
          value={calories}
          placeholder={`${placeholderCaloriesLimit} kcal`}
          onInput={(e) => setCalories(e.target.value)}
          width={190}
          type="number"
        />
        <SearchInput type="submit" />
      </form>
    </SearchDiv>
  );
};

export default SearchBox;
