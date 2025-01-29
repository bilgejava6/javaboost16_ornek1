import React from 'react'
import {
    BrowserRouter,
    Routes, Route
} from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Register from './page/Register';
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
        </Routes>
    </BrowserRouter>
  )
}
export default routerpage