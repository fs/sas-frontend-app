import './App.css';
import axios from 'axios'
import { Component, useEffect, useState } from 'react';
import ProductsData from './components/ProductsData';

function App() {

  const apiURL = 'https://api.edamam.com/api/food-database/v2/parser?';

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const resp = axios.get(apiURL, {
      params:
      {
        app_id: 'b18c1cfc',
        app_key: 'b93be83ead71c225105bd41f78d1dab6',
        ingr: 'potato'
      }
    })
      .then((resp) => {
        setProducts((resp.data.parsed)[0].food);
        console.log((resp.data.parsed)[0].food.label);
        console.log((resp.data.parsed)[0].food.image);
        console.log((resp.data.parsed)[0].food.category);
      })
      .catch(error => {
        console.error('I failed', error);
        setError(error);

      })
  })

  return (
    <div>
        {products.map((product) => (
          <ProductsData
            title={product.label}
            category={product.category}
            image={product.image}
            
          />
        ))}
      </div>
      
  );
}




export default App;
