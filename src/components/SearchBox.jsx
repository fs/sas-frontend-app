import React, { useState } from "react";
import styled from "styled-components";
import fetchRecieps from "../api/fetchRecipes";

const SearchDiv = styled.div`
  width: 187px+393px+20px+130px+20px;
  height: 39px;
  left: 0px;
  top: 0px;

  display: flex;
`;

const IngrInput = styled.input`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);

  width: 393px;

  background: #d0edeb;
  border-radius: 10px;

  margin: 0px 10px 0px;

  :focus {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  line-height: 28px;
  text-align: center;

  color: rgba(0, 0, 0, 0.6);
`;

const CalInput = styled.input`
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 28px;
  text-align: center;

  margin: 0px 10px 0px;

  background: #d0edeb;
  border-radius: 10px;

  color: rgba(0, 0, 0, 0.6);

  :focus {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 103px;
  height: 39px;
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

const placeholdercalLimit = 2000;

const placeholderIngr = "Chicken, salmon, cream cheese";

async function search(ingredient = "", caloriesLimit = 0) {
  const trimmedIngr = ingredient.replaceAll(",", "");

  const res = await fetchRecieps(trimmedIngr, caloriesLimit);

  if (ingredient.length < 1 || caloriesLimit < 1) return; // TODO: if there's no input, we probably should let the user know they need to write their request

  // TODO: placeholder since we don't do anything with it just yet
  // eslint-disable-next-line no-console
  console.log(res);
}

const SearchBox = () => {
  const [ingrText, setIngr] = useState();
  const [cals, setCals] = useState();

  return (
    <SearchDiv>
      <IngrInput
        value={ingrText}
        placeholder={placeholderIngr}
        onInput={(e) => setIngr(e.target.value)} // placeholder ingredient limit to display
      />
      <CalInput
        value={cals}
        placeholder={`${placeholdercalLimit} kcal`} // placeholder calorie limit to display
        onInput={(e) => setCals(e.target.value)}
      />
      <SearchButton onClick={() => search(ingrText, cals)}>Search</SearchButton>
    </SearchDiv>
  );
};

export default SearchBox;
