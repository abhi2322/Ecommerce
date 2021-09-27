import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Main.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
export default function Main() {
  const [products,setProducts]= useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(false);
  useEffect(()=>{
    const fetchData = async()=>{
     try{
        setLoading(true)
        const {data}=await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
     }
     catch(err){
        setError(err.message);
        setLoading(false);
     }
    }
    fetchData();
  },[])
    return (
        <main>
            <div>
              {loading?<LoadingBox></LoadingBox>
              :
              error?<ErrorBox variant="danger">{error}</ErrorBox>
              :
              <div className="row center">
                {
                  products.map(product=>(
                  <Product product={product}/>
                ))}
              </div>
              }
              </div>
        </main>
    );
}
