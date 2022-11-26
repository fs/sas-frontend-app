import React, { useState } from "react";
import { SearchDiv, SearchTextInput, SearchInput } from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const placeholderCaloriesLimit = 2000;

const placeholderIngredientList = "Chicken salmon cream cheese";

const search = async (ingredient = "", caloriesLimit = 0) => {
  const trimmedIngredients = ingredient.replaceAll(",", "");

  const res = await fetchRecipes(trimmedIngredients, caloriesLimit);

  if (ingredient.length < 1 || caloriesLimit < 1) return;

  // TODO: remove logging after merge
  // eslint-disable-next-line no-console
  console.log(res);
};

const submit = (event, ingredientText, calories) => {
  event.preventDefault();
  search(ingredientText, calories);
};

const SearchBox = () => {
  const [ingredientText, setIngredient] = useState("");
  const [calories, setCalories] = useState("");

  return (
    <SearchDiv>
      <form onSubmit={(e) => submit(e, ingredientText, calories)}>
        <SearchTextInput
          value={ingredientText}
          placeholder={placeholderIngredientList}
          onInput={(e) => setIngredient(e.target.value)}
        />
        <SearchTextInput
          value={calories}
          placeholder={`${placeholderCaloriesLimit} kcal`}
          onInput={(e) => setCalories(e.target.value)}
        />
        <SearchInput type="submit" />
      </form>
    </SearchDiv>
  );
};

export default SearchBox;
