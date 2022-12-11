import fetchRecipes from "./fetchRecipes";
import apiInstance from "./apiInstance";

import { mockRecipesList } from "../__mocks__/mockRecipes";

jest.mock("./apiInstance");

describe("fetchRecipes", () => {
  test("should fetch recipes", async () => {
    // Arrange
    const expectedRecipes = mockRecipesList;
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
    expect(result).toEqual(expectedRecipes);
  });
});
