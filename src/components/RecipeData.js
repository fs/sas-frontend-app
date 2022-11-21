import defPic from '../img/default_pictire.png';

const RecipeData = ({ title, ingredients, image }) => {
  if (!image)
    image = defPic;
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <h3>Ingredients:</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>

    </div>
  );
};
export default RecipeData;

/*<table>
            <thead>
                <tr>
                    <th>kcal</th>
                    <th>procnt</th>
                    <th>fat</th>
                    <th>chocdf</th>
                    <th>fibtg</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nutrients.ENERC_KCAL}</td>
                    <td>{nutrients.PROCNT}</td>
                    <td>{nutrients.FAT}</td>
                    <td>{nutrients.CHOCDF}</td>
                    <td>{nutrients.FIBTG}</td>
                </tr>
            </tbody>
        </table>*/