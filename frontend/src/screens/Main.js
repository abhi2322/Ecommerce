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
  },[dispatch]);
    return (
            <div>
              {loading?<LoadingBox></LoadingBox>
              :
              error||(!Array.isArray(products))?<ErrorBox variant="danger">{error}</ErrorBox>  /* (!Array.isArray(products)) added it to handel the case
                                                                                                when products is not a array */
              :
              <div className="row center">
                {
                  products.map(product=>(
                  <Product id={product._id} product={product}/>
                ))
                }
              </div>
              }
              </div>
    );
}
