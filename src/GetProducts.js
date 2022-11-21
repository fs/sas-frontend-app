import './App.css';
import axios from 'axios'
import {useEffect, useState } from 'react';
import ProductsData from './components/ProductsData';

function GetProducts() {

  const apiURL = 'https://api.edamam.com/api/food-database/v2/parser?';

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState();
  
  const getProducts = async()=>{
    await axios.get(apiURL, {
        params:
        {
          app_id: 'b18c1cfc',
          app_key: 'b93be83ead71c225105bd41f78d1dab6',
          ingr: 'chicken potato'
        }
    })
    .then((resp) => {
        setProducts((resp.data.parsed));
        console.log((resp.data.parsed));
        console.log((resp.data.parsed)[0].food.label);
        console.log((resp.data.parsed)[0].food.image);
        console.log((resp.data.parsed)[0].food.category);
      })
      .catch(error => {
        console.error('I failed', error);
        setError(error);

      })
  }
  
  useEffect(()=>{
    getProducts();
  }, [query]);

if(error)
  return(
    <div>
        Ошибка получения данных
    </div>
  )

  return ( 
    <div>
        {products.map((product) => (
          <ProductsData
            key={product.food.foodId}
            title={product.food.label}
            category={product.food.category}
            image={product.food.image}
          />
        ))}
      </div>
  );
}

export default GetProducts;
