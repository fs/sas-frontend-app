import { useState } from "react";

import RecipeItem from "../RecipeItem";
import ModalWindow from "../ModalWindow";
import RecipeModalContent from "../RecipeModalContent";

import List from "./styles";

const RecipesList = ({ recipes }) => {
  const [recipeID, setRecipeID] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const setModalData = (productData) => {
    setRecipeID(productData);
    setShowModal(true);
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <List>
      <ModalWindow showModal={showModal} customOnClick={closeModal}>
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
