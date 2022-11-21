const ProductData = ({ title, category, image }) => {
  return (
    <div>
      <ol>
          <li>{title}</li>
          <li>{category}</li>
          <li><img src={image} alt="" /></li>
        </ol>
    </div>
    );
};
export default ProductData;