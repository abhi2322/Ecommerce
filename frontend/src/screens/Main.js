import React from 'react';
import './Main.css'
import data from '../data.js'
import Product from '../components/Product'
export default function Main() {
    return (
        <main>
            <div>
                <div className="row center">
                  {
                    data.products.map(product=>(
                    <Product product={product}/>
                  ))}
                </div>
              </div>
        </main>
    )
}
