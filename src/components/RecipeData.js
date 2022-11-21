import React from "react";

const RecipeData = ({ title, image, ingredients }) => {
  return (
    <div >
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeData;