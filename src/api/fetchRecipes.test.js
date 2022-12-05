import fetchRecipes from "./fetchRecipes";
import apiInstance from "./apiInstance";

jest.mock("./apiInstance");

describe("fetchRecipes", () => {
  test("should fetch recipes", () => {
    // Arrange
    const hits = [1, 2, 3];

    const expectedResponse = {
      data: {
        hits,
      },
    };
    const mockApiInstance = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(expectedResponse);
        }),
    );
    apiInstance.mockImplementation(mockApiInstance);

    // Act
    const result = fetchRecipes();

    // Assert
    expect(apiInstance).toHaveBeenCalledTimes(1);
    expect(result).toEqual(hits);
  });
});
