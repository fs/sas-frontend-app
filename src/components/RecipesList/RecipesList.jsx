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
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <List>
      <ModalWindow showModal={showModal} customOnClick={closeModal}>
        <RecipeModalContent recipeData={recipes[recipeID]} />
      </ModalWindow>

      {Object.keys(recipes).map((key) => (
        <RecipeItem
          key={key}
          recipe={recipes[key]}
          setModalData={setModalData}
        />
      ))}
    </List>
  );
};

export default RecipesList;
