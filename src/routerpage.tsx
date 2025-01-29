import React from 'react'
import {
    BrowserRouter,
    Routes, Route
} from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Register from './page/Register';
import UrunListesi from './page/UrunListesi';
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
                   
        </Routes>
    </BrowserRouter>
  )
}
export default routerpage