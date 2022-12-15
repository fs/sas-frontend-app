import {
  ItemImage,
  ItemInfo,
  ListItem,
  InfoIcon,
  InfoText,
  ItemTitle,
} from "./styles";
import defaultPic from "../../img/defaultPicture.png";
import dishIcon from "../../icons/dishIcon.svg";
import clockIcon from "../../icons/clockIcon.svg";

const RecipeItem = ({ recipe, setModalData }) => {
  const { id, image = defaultPic, title, dishType, cookingTime } = recipe;

  const handleClick = () => {
    setModalData(id);
  };

  return (
    <ListItem onClick={handleClick} data-testid="test-recipe-item">
      <ItemImage src={image} alt={title} />

      <ItemTitle>{title}</ItemTitle>

      <ItemInfo>
        <InfoIcon src={dishIcon} alt="dishIcon" />
        <InfoText>Dish type: {dishType}</InfoText>
      </ItemInfo>
      <ItemInfo>
        <InfoIcon src={clockIcon} alt="clockIcon" />
        <InfoText>Cooking time: {cookingTime}</InfoText>
      </ItemInfo>
    </ListItem>
  );
};

export default RecipeItem;
