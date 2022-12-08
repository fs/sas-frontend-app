import { render, screen } from "@testing-library/react";

import RecipesList from "./RecipesList";

import { mockRecipesList } from "../../__mocks__/mockRecipes";

describe("RecipeList", () => {
  test("should render list of recipes", async () => {
    // Arrange
    render(<RecipesList recipes={mockRecipesList} />);

    // Act
    const recipesList = screen.getAllByTestId("test-recipe-item");

    // Assert
    expect(recipesList.length).toEqual(mockRecipesList.length);
  });
});
