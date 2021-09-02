import React from 'react';
import  './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="grid-container">
      <Header/>
      <Main />
      <Footer/>
    </div>
  )
}

