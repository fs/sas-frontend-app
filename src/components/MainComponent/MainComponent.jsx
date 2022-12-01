import RecipesList from "../RecipesList";
import SearchBox from "../SearchBox";
import MainDiv from "./styles";

const MainComponent = () => {
  return (
    <MainDiv>
      <SearchBox />
      <RecipesList />
    </MainDiv>
  );
};

export default MainComponent;
