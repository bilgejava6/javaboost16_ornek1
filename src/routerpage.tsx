import React from 'react'
import {
    BrowserRouter,
    Routes, Route
} from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Register from './page/Register';
import UrunListesi from './page/UrunListesi';
import ProductList from './page/ProductList';
import OrneSayfa from './page/OrneSayfa';
function routerpage() {
    // root, sitenin ana dizini 
  return (
    <BrowserRouter
    future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login'  element={<Login />}/>
            <Route path='/register'  element={<Register />}/>         
            <Route path='/urun-listesi'  element={<UrunListesi />}/>         
            <Route path='/product-list'  element={<ProductList />}/>  
            <Route path='/ornek'  element={<OrneSayfa />}/>  
                   
                   
        </Routes>
    </BrowserRouter>
  )
}
export default routerpage