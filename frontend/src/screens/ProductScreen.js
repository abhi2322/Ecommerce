import React from 'react'
import Rating from '../components/Rating';
import data from'../data'
import {Link} from 'react-router-dom';
export default function ProductScreen(props) {
    const product=data.products.find((x)=>x._id===props.match.params.id);
    if(!product){
        return<di>Product not found</di>
    }
    return (
        <div>
           <Link to="/"> Back to result</Link>
            <div className="row top">
                <div className="col2">
                    <img className="larger" src={product.image} alt={product.name}></img>
                </div>
                <div className="col1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            />
                        </li>
                        <li>
                            Price : ${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                    <div>
                                        {
                                            product.countInStock>0?<span class="success">In Stock</span>:
                                            <span className="error">Out of stock</span>
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Card</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
