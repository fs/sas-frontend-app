import React, { useState } from "react";
import styled from "styled-components";
import fetchRecieps from "../api/fetchRecipes";

const placeholdercalLimit = 2000;

const placeholderIngredientList = "Chicken salmon cream cheese";

const SearchDiv = styled.div`
  width: 100%;
  height: 39px;
  left: 0px;
  top: 0px;

  display: flex;
`;

const SearchTextInput = styled.input`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);

  width: 393px;
  height: 100%;

  background: #d0edeb;
  border-radius: 10px;

  margin: 0px 10px 0px;

  :focus {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
    color: rgba(0, 0, 0, 0.8);
  }

  line-height: 28px;
  text-align: center;

  color: rgba(0, 0, 0, 0.6);
`;

const SearchInput = styled.input`
  width: 103px;
  height: 100%;
  left: 0px;
  top: 0px;

  margin: 0px 10px 0px;

  background: #0bbdb1;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  text-align: center;

  color: #000000;

  cursor: pointer;
`;

async function search(ingredient = "", caloriesLimit = 0) {
  const trimmedIngr = ingredient.replaceAll(",", "");

  const res = await fetchRecieps(trimmedIngr, caloriesLimit);

  if (ingredient.length < 1 || caloriesLimit < 1) return; // TODO: if there's no input, we probably should let the user know they need to write their request

  // TODO: placeholder since we don't do anything with it just yet
  // eslint-disable-next-line no-console
  console.log(res);
}

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
          placeholder={placeholderIngredientList} // placeholder ingredient limit to display
          onInput={(e) => setIngredient(e.target.value)}
        />
        <SearchTextInput
          value={calories}
          placeholder={`${placeholdercalLimit} kcal`} // placeholder calorie limit to display
          onInput={(e) => setCalories(e.target.value)}
        />
        <SearchInput type="submit" />
      </form>
    </SearchDiv>
  );
};

export default SearchBox;
