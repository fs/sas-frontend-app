const ProductData = ({ title, nutrients, image }) => {
  return (
    <div>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <table>
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
        </table>
    </div>
    );
};
export default ProductData;
