import { useState } from "react";
import { SearchDiv, SearchTextInput, SearchInput } from "./styles";

const placeholderCaloriesLimit = 2000;
const placeholderIngredientList = "Chicken pineapple cream cheese";

const SearchBox = ({ onSubmit }) => {
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    onSubmit({ ingredients, calories });
  };

  return (
    <SearchDiv>
      <form onSubmit={submitForm}>
        <SearchTextInput
          value={ingredients}
          placeholder={placeholderIngredientList}
          onInput={(e) => setIngredients(e.target.value)}
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
