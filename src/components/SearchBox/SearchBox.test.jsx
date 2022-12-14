import { render, screen, fireEvent } from "@testing-library/react";

import SearchBox from "./SearchBox";

describe("RecipeList", () => {
  test("should render a list of recipes", async () => {
    // Arrange
    const expectedIngredients = "potato";
    const expectedCalories = "3000";

    const mockOnSubmit = jest.fn();

    render(<SearchBox onSubmit={mockOnSubmit} />);
    const form = screen.getByTestId("test-form");
    const inputIngredients = screen.getByTestId("test-input-ingredients");
    const inputCalories = screen.getByTestId("test-input-calories");

    // Act
    fireEvent.change(inputIngredients, {
      target: { value: expectedIngredients },
    });
    fireEvent.change(inputCalories, { target: { value: expectedCalories } });
    fireEvent.submit(form);

    // Assert
    expect(mockOnSubmit).toHaveBeenCalledWith({
      ingredients: expectedIngredients,
      calories: expectedCalories,
    });
  });
});

describe("SearchBox", () => {
  test("should create errors", async () => {
    // Arrange
    const expectedIngredients = "";
    const expectedCalories = "-5000";

    render(<SearchBox />);
    const form = screen.getByTestId("test-form");
    const inputIngredients = screen.getByTestId("test-input-ingredients");
    const inputCalories = screen.getByTestId("test-input-calories");

    // Act
    fireEvent.change(inputIngredients, {
      target: { value: expectedIngredients },
    });
    fireEvent.change(inputCalories, { target: { value: expectedCalories } });

    fireEvent.submit(form);

    const errors = screen.getAllByTestId("test-validation-message");

    // Assert
    expect(errors.length).toBe(2);
  });

  test("should not create any validation errors", async () => {
    // Arrange
    const expectedIngredients = "Peach cream";
    const expectedCalories = "2000";

    const mockOnSubmit = jest.fn();

    render(<SearchBox onSubmit={mockOnSubmit} />);
    const form = screen.getByTestId("test-form");
    const inputIngredients = screen.getByTestId("test-input-ingredients");
    const inputCalories = screen.getByTestId("test-input-calories");

    // Act
    fireEvent.change(inputIngredients, {
      target: { value: expectedIngredients },
    });
    fireEvent.change(inputCalories, { target: { value: expectedCalories } });

    fireEvent.submit(form);

    const caloriesError = screen.queryByText(
      "Please enter a realistic range of calories",
    );

    const ingredientsError = screen.queryByText(
      "Please enter a list of ingredients",
    );

    // Assert
    expect(caloriesError).toBeNull();
    expect(ingredientsError).toBeNull();
  });
});
