import React from "react";
import {
  ItemImage,
  ItemInfo,
  ListItem,
  InfoIcon,
  InfoText,
  ItemTitle,
} from "./styles";
import defPic from "../../img/default_pictire.png";
import dishIcon from "../../icons/main-course.png";
import clockIcon from "../../icons/clock.png";

const RecipeItem = ({ title, image, cookingTime, dishType }) => {
  let cookingTimeStr = "";

  if (cookingTime === 0) {
    cookingTimeStr = "Not available";
  } else {
    cookingTimeStr = `${cookingTime} minutes`;
  }

  return (
    <ListItem>
      <ItemImage src={image || defPic} alt="" />

      <ItemTitle>{title}</ItemTitle>

      <ItemInfo>
        <InfoIcon src={dishIcon} alt="dishIcon" />
        <InfoText>Dish type: {dishType[0]}</InfoText>
      </ItemInfo>
      <ItemInfo>
        <InfoIcon src={clockIcon} alt="clockIcon" />
        <InfoText>Cooking time: {cookingTimeStr}</InfoText>
      </ItemInfo>
    </ListItem>
  );
};

export default RecipeItem;
