import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import ProductsData from './components/ProductsData';

function App() {
  
  const [appState, setAppState] = useState();

  const fetchData=()=>{
    const apiKey='';
    const apiUrl='';
    axios.get(url).then((resp)=>{
      const allProducts=resp.data;
      setAppState(allProducts);
    })
  };


  return (
    <div>empty page</div>
  );
}

export default App;
