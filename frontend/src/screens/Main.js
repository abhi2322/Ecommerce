import React,{useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
import {useDispatch,useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions'
export default function Main() {
  const dispatch = useDispatch();
  const productList=useSelector(state=>state.productList);
  const {loading,error,products}=productList;
  useEffect(()=>{
    dispatch(listProducts());
  },[]);
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
