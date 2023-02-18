import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Cart from './_component/_cart/Cart';
import Home from './_component/Home';
import Login from './_component/Auth/Login'
import Signup from './_component/Auth/Signup'
import ProductDesription from './_component/ProductPage/ProductDesription';
import Slidingproducts from './_component/_Hader/Slidingproducts'
import Product from './_component/ProductPage/Product'
import HaderTop from './_component/_Hader/HaderTop'


function App() {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Slidingproducts' element={<Slidingproducts />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/HaderTop' element={<HaderTop />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/ProductDesription' element={<ProductDesription />} />
      </Routes>
  );
}

export default App;
