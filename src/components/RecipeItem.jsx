import React from "react";
import defPic from "../img/default_pictire.png";
import dishIcon from "../icons/main-course.png";
import clockIcon from "../icons/clock.png";

import { ItemImage, ItemInfo, ListItem, InfoIcon } from "./styles";

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

      <h4>{title}</h4>

      <ItemInfo>
        <InfoIcon src={dishIcon} alt="dishIcon" />
        <p>Dish type: {dishType}</p>
      </ItemInfo>
      <ItemInfo>
        <InfoIcon src={clockIcon} alt="clockIcon" />
        <p>Cooking time: {cookingTimeStr}</p>
      </ItemInfo>
    </ListItem>
  );
};

export default RecipeItem;
