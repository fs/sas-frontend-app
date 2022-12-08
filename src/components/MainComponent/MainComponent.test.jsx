import { render, waitFor } from "@testing-library/react";

import fetchRecipes from "../../api/fetchRecipes";
import MainComponent from "./MainComponent";

import { mockRecipesList } from "../../__mocks__/mockRecipes";

jest.mock("../../api/fetchRecipes");

describe("MainComponent", () => {
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
    render(<MainComponent />);

    // Assert
    await waitFor(() => expect(mockFetchRecipes).toHaveBeenCalledTimes(1));
    expect(mockFetchRecipes).toHaveBeenCalledWith({});
  });
});
