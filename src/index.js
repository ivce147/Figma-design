import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import  AppProvider  from './Contexts/AppContextProvider';
import  {CartProvider}  from './Contexts/CartContexProvider';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </AppProvider>
  </BrowserRouter>
);
