import React from "react";


const ProductData = ({ key, title, category, image }) => {
    return (
        <div className="product">
            <ol>
                <li>{title}</li>
                <li>{category}</li>
                <li><img src={image} alt="" /></li>
            </ol>
        </div>
    );
};
export default ProductData;