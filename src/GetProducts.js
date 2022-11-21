import './App.css';
import axios from 'axios'
import {useEffect, useState } from 'react';
import ProductsData from './components/ProductsData';

function GetProducts() {

  const apiURL = 'https://api.edamam.com/api/food-database/v2/parser?';

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState();
  const ingrList='chicken|potato|rice|orange|meat|pork|spaghetti|carrot|onion';
  const getProducts = async()=>{
    await axios.get(apiURL, {
        params:
        {
          app_id: 'b18c1cfc',
          app_key: 'b93be83ead71c225105bd41f78d1dab6',
          ingr: ingrList
        }
    })
    .then((resp) => {
        setProducts((resp.data.hints));
        console.log((resp));
        console.log((resp.data.hints));
      })
      .catch(error => {
        if(error.response)
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
            nutrients={product.food.nutrients}
            image={product.food.image}
          />
        ))}
      </div>
  );
}

export default GetProducts;
