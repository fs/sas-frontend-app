import React from "react";
import defPic from "../img/default_pictire.png";

import { ItemImage, ListItem } from "./styles";

const RecipeItem = ({ title, image }) => {
  return (
    <ListItem>
      <ItemImage src={image || defPic} alt="" />

      <h4>{title}</h4>
    </ListItem>
  );
};

export default RecipeItem;
