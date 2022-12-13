import { useState } from "react";
import CaloriesIcon from "../../icons/caloriesIcon.svg";
import DishIcon from "../../icons/dishIcon.svg";
import {
  SearchDiv,
  SearchTextInput,
  SearchInput,
  ValidationBox,
  VerticalDiv,
  SearchForm
} from "./styles";
import ValidationMessage from "../ValidationMessage";

const placeholderCaloriesLimit = 2000;
const placeholderIngredientList = "Chicken pineapple cream cheese";

const SearchBox = ({ onSubmit }) => {
  const [calories, setCalories] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [ingredients, setIngredients] = useState("");

  const validate = () => {
    const result = { errors: [], valid: true };

    if (calories < 1) {
      const error = {
        message: "Please enter a realistic range of calories",
        icon: CaloriesIcon,
      };
      result.errors.push(error);
      result.valid = false;
    }

    if (!ingredients || ingredients.length < 2) {
      const error = {
        message: "Please enter a list of ingredients",
        icon: DishIcon,
      };
      result.errors.push(error);
      result.valid = false;
    }

    return result;
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const validationResult = validate();

    if (validationResult.valid) {
      onSubmit({ ingredients, calories });
    } else {
      setValidationErrors(validationResult.errors);
    }
  };

  return (
    <VerticalDiv>
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

      <ValidationBox>
        {validationErrors.map(({ message, icon }) => (
          <ValidationMessage key={message} text={message} icon={icon} />
        ))}
      </ValidationBox>
    </VerticalDiv>
  );
};

export default SearchBox;
