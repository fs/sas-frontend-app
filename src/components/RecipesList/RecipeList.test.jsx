import { render, screen } from "@testing-library/react";

import RecipesList from "./RecipesList";
import fetchRecipes from "../../api/fetchRecipes";

import { mockRecipesList } from "../../__mocks__/mockRecipes";

jest.mock("../../api/fetchRecipes");

describe("RecipeList", () => {
  test("should render list of recipes", async () => {
    // Arrange
    const expectedResponse = mockRecipesList;
    const mockFetchRecipes = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );

    fetchRecipes.mockImplementation(mockFetchRecipes);

    // Act
    render(<RecipesList />);
    const recipesList = await screen.findAllByTestId("test-recipe-item");

    // Assert
    expect(mockFetchRecipes).toHaveBeenCalledTimes(1);
    expect(recipesList.length).toEqual(expectedResponse.length);
  });
});
