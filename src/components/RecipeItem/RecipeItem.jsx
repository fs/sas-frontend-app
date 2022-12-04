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

const RecipeItem = ({
  id,
  title,
  image = defaultPic,
  cookingTime,
  dishType,
  recipeData,
}) => {
  const handleClick = () => {
    recipeData(id);
  };

  return (
    <ListItem onClick={handleClick}>
      <ItemImage src={image} alt="" />

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
