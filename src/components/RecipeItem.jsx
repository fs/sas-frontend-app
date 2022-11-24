import React from "react";
import defPic from "../img/default_pictire.png";

import { ItemImage, ItemInfo, ListItem } from "./styles";

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
        <p>Dish type: {dishType}</p>
      </ItemInfo>
      <ItemInfo>
        <p>Cooking time: {cookingTimeStr}</p>
      </ItemInfo>
    </ListItem>
  );
};

export default RecipeItem;
