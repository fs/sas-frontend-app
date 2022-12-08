import { useState } from "react";

import RecipeItem from "../RecipeItem";
import ModalWindow from "../ModalWindow";
import RecipeModalContent from "../RecipeModalContent";

import List from "./styles";

const RecipesList = ({ recipes }) => {
  const [showModal, setShowModal] = useState(false);
  const [recipeID, setRecipeID] = useState(null);

  const setModalData = (productData) => {
    setRecipeID(productData);
    setShowModal(true);
  };

  return (
    <List>
      <ModalWindow
        showModal={showModal}
        customOnClick={() => setShowModal(false)}
      >
        <RecipeModalContent recipeData={recipes[recipeID]} />
      </ModalWindow>
      {Object.keys(recipes).map((key) => (
        <RecipeItem
          key={key}
          id={key}
          title={recipes[key].label}
          image={recipes[key].image}
          cookingTime={recipes[key].cookingTime}
          dishType={recipes[key].dishType}
          recipeData={setModalData}
        />
      ))}
    </List>
  );
};

export default RecipesList;
