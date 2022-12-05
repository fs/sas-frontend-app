import { SearchDiv, SearchTextInput, SearchInput } from "./styles";

const placeholderCaloriesLimit = 2000;

const placeholderIngredientList = "Chicken salmon cream cheese";

const SearchBox = (props) => {
  const { submit, setCalories, setIngredient } = props;

  return (
    <SearchDiv>
      <form onSubmit={submit}>
        <SearchTextInput
          placeholder={placeholderIngredientList}
          onInput={(e) => setIngredient(e.target.value)}
          width={400}
        />
        <SearchTextInput
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
