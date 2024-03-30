// App.js
import React from 'react';
import ProductListing from './components/ProductListing';
import Header  from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductListing />
    </div>
  );
}

export default App;
