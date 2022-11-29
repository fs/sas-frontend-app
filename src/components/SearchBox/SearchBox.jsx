import React, { useState } from "react";
import { SearchDiv, SearchTextInput, SearchInput } from "./styles";
import fetchRecipes from "../../api/fetchRecipes";

const placeholderCaloriesLimit = 2000;

const placeholderIngredientList = "Chicken salmon cream cheese";

const search = async (ingredient = "", caloriesLimit = 0) => {
  const trimmedIngredients = ingredient.replaceAll(",", "");

  const res = await fetchRecipes(trimmedIngredients, caloriesLimit);

  if (ingredient.length < 1 || caloriesLimit < 1) return;

  // TODO: remove logging
  // eslint-disable-next-line no-console
  console.log(res);
};

const SearchBox = () => {
  const [ingredientText, setIngredient] = useState("");
  const [calories, setCalories] = useState("");

  const submit = (event) => {
    event.preventDefault();
    search(ingredientText, calories);
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
