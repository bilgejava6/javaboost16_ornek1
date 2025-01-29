import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import ToplamaVeHooks from './page/ToplamaVeHooks';
import Login from './page/Login';
import Register from './page/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Register />);
