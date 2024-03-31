import React from 'react';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <ProductListing /> */}
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
