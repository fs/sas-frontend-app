import { render, screen, waitFor } from "@testing-library/react";

import fetchRecipes from "../../api/fetchRecipes";
import MainComponent from "./MainComponent";

import { mockFormattedRecipes } from "../../__mocks__/mockRecipes";

jest.mock("../../api/fetchRecipes");

describe("MainComponent", () => {
  test("should call fetchRecipes on first render", async () => {
    // Arrange
    const expectedResponse = mockFormattedRecipes;
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

  test("should show error message on error", async () => {
    // Arrange
    const mockFetchRecipes = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject(new Error());
        }),
    );

    fetchRecipes.mockImplementation(mockFetchRecipes);

    // Act
    render(<MainComponent />);
    const errorContainer = await screen.findByTestId("error-container");

    // Assert
    expect(errorContainer).not.toBeNull();
  });
});
