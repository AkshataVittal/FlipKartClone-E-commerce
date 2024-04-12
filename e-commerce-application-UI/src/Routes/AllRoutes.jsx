import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from '../App.jsx';
import VerifyOtp from '../public/VerifyOtp.jsx'
import Explore from '../private/customer/Explore.jsx'
import SellerDashBoard from '../private/seller/SellerDashBoard.jsx'
import Cart from '../private/customer/Cart.jsx'
import Order from '../private/customer/Order.jsx'
import WishList from '../private/customer/WishList.jsx'
import Login from '../public/Login.jsx'
import Register from '../public/Register.jsx'
import Home from '../public/Home.jsx'
import EditProfile from '../private/common/EditProfile.jsx'
import AddProduct from '../private/seller/AddProduct.jsx'
import AddAddress from '../private/common/AddAddress.jsx';


// <Route path='/' element={<App/>}>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='/login' element={<Login/>}/>
    //       <Route path='/register' element={<Register/>}/>
    //       <Route path="/verifyOtp" element={<VerifyOtp/>}/>
    //       <Route path="/explore" element={<Explore/>}/>
    //       <Route path="/wishlist" element={<WishList/>}/>
    //       <Route path="/seller-dashboard" element={<SellerDashBoard/>}/>
    //       <Route path="/cart" element={<Cart/>}/>
    //       <Route path="/order" element={<Order/>}/>


const AllRoutes = () => {

    let routers={
         home: <Route  key={"home"} path='/' element={<Home/>}/>,
          login:<Route key={"login"} path='/login' element={<Login/>}/>,
          register:<Route key={"register"} path='/register' element={<Register/>}/>,
          verifyotp:<Route key={"vrifyotp"} path="/verifyOtp" element={<VerifyOtp/>}/>,
          explore:<Route key={"explore"} path="/explore" element={<Explore/>}/>,
          wishlist:<Route key={"wishlist"} path="/wishlist" element={<WishList/>}/>,
          sellerdashboard:<Route key={"seller-dashboard"}path="/seller-dashboard" element={<SellerDashBoard/>}/>,
          cart:<Route key={"cart"}path="/cart" element={<Cart/>}/>,
          order:<Route key={"order"}path="/order" element={<Order/>}/>,
          addproduct:<Route key={"add-product"}path="/addProduct" element={<AddProduct/>}/>,
          editprofile:<Route key={"edit-profile"}path="/editprofile" element={<EditProfile/>}/>,
          addaddress:<Route key={"add-address"}path="/add-address" element={<AddAddress/>}/>

 }

const user={
    userId:"123",
    username:"abc",
    role:"CUSTOMER",
    authenticated:true,
    accessExpiration:3600,
    refreshExpiration:"1269000"
}

const {role,authenticated}=user;
let routes=[];

if(authenticated){

    (role==="SELLER")?
    (
        routes.push(routers.sellerdashboard ,routers.addproduct)
    )
    :
    (
        routes.push(routers.explore,routers.home,routers.login,routers.register)
    )

}else{

    (role==="CUSTOMER")&&
    (
        routes.push(routers.explore,routers.home,routers.login,routers.register,routers.wishlist)
    )
}
routes.map((route)=>{
    console.log(route.key)
});

 return (
    <Routes>
        <Route path='/' element={<App/>}>
    {routes}
 </Route>
    </Routes>
 );
}

export default AllRoutes