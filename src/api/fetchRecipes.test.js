import { v4 as uuidv4 } from "uuid";
import fetchRecipes from "./fetchRecipes";
import apiInstance from "./apiInstance";

import {
  mockRecipesList,
  mockFormattedRecipes,
} from "../__mocks__/mockRecipes";

jest.mock("uuid");
jest.mock("./apiInstance");

describe("fetchRecipes", () => {
  test("should fetch recipes", async () => {
    // Arrange
    const expectedRecipes = mockRecipesList;
    const expectedFormattedRecipes = mockFormattedRecipes;
    const expectedIngredients = "potato";
    const expectedCalories = "3400";

    const params = {
      app_id: process.env.REACT_APP_RECIPES_APP_ID,
      app_key: process.env.REACT_APP_RECIPES_APP_KEY,
      type: "public",
      random: true,
      diet: "low-fat",
      q: expectedIngredients,
      calories: `0-${expectedCalories}`,
    };

    const mockUuidv4 = jest.fn(() => 111);
    uuidv4.mockImplementation(mockUuidv4);

    const expectedResponse = {
      data: {
        hits: expectedRecipes,
      },
    };
    const mockGetRaquest = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );
    apiInstance.get.mockImplementation(mockGetRaquest);

    // Act
    const result = await fetchRecipes({
      ingredients: expectedIngredients,
      calories: expectedCalories,
    });

    // Assert
    expect(apiInstance.get).toHaveBeenCalledTimes(1);
    expect(apiInstance.get).toHaveBeenCalledWith("/recipes/v2", { params });
    expect(result).toEqual(expectedFormattedRecipes);
  });
});
