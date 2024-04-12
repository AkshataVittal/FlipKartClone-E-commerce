import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './public/Login.jsx'
import Register from './public/Register.jsx'
import Home from './public/Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerifyOtp from './public/VerifyOtp.jsx'
import Explore from './private/customer/Explore.jsx'
import SellerDashBoard from './private/seller/SellerDashBoard.jsx'
import Cart from './private/customer/Cart.jsx'
import Order from './private/customer/Order.jsx'
import WishList from './private/customer/WishList.jsx'
import AllRoutes from './Routes/AllRoutes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <AllRoutes/>
    </BrowserRouter>
  </React.StrictMode>
)
