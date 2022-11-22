const RecipesList = () => {
//не доделано
//надо обработать ввод не через пробел
//надо вызвать GetRecipes и передать туда строку
  return (
    <div>
      <form name='recipeSearch'>
        <label>
          Ингредиенты:
          <input id='ingredients' type="text" name="ingredients" placeholder='Введите ингредиенты через пробел'/>

        </label>
        <input type="submit" value="Отправить"/>
      </form>
    </div>
  )
}

export default RecipesList();
