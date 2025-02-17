import React from 'react';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
//import Products from './components/Products';
//import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
