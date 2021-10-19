import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import  './App.css';
import Header from './components/Header.js';
import Main from './screens/Main.js';
import ProductScreen from './screens/ProductScreen.js';
import Footer from './components/Footer.js';
import CartScreen from './screens/CartScreen';

export default function App() {
  return (
      <BrowserRouter>
        <div className="grid-container">
        <Header/>
        <div>
          <Route path="/" component={Main} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </div>
        <Footer/>
        </div>
      </BrowserRouter>
  )
}

