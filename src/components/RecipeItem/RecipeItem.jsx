import React from "react";
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

const RecipeItem = ({ title, image = defaultPic, cookingTime, dishTypes }) => {
  let cookingTimeStr = "";
  let dish = "";

  cookingTime === 0
    ? (cookingTimeStr = "Not available")
    : (cookingTimeStr = `${cookingTime} minutes`);

  dishTypes.length > 0 ? ([dish] = dishTypes) : (dish = "Not available");

  return (
    <ListItem>
      <ItemImage src={image} alt="" />

      <ItemTitle>{title}</ItemTitle>

      <ItemInfo>
        <InfoIcon src={dishIcon} alt="dishIcon" />
        <InfoText>Dish type: {dish}</InfoText>
      </ItemInfo>
      <ItemInfo>
        <InfoIcon src={clockIcon} alt="clockIcon" />
        <InfoText>Cooking time: {cookingTimeStr}</InfoText>
      </ItemInfo>
    </ListItem>
  );
};

export default RecipeItem;
