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
      <form onSubmit={submitForm} data-testid="test-form">
        <SearchTextInput
          value={ingredients}
          placeholder={placeholderIngredientList}
          onChange={(e) => setIngredients(e.target.value)}
          width={400}
          data-testid="test-input-ingredients"
        />
        <SearchTextInput
          value={calories}
          placeholder={`${placeholderCaloriesLimit} kcal`}
          onChange={(e) => setCalories(e.target.value)}
          width={190}
          type="number"
          data-testid="test-input-calories"
        />
        <SearchInput type="submit" />
      </form>
    </SearchDiv>
  );
};

export default SearchBox;
