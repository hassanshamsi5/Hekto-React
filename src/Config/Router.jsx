import React, { useState } from 'react'
import Navbar from '../Components/Navbar/navbar'
// import Shop from '../Screen/Shop/shop'
// import ShopCateory from '../Screen/ShopCateory/shopcatetory'
// import Products from '../Screen/Products/products'
import LoginSignup from '../Screen/loginSignup/login'
// import Cart from '../Screen/Cart/cart'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from '../Components/Assets/allProducts'

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
      <Router>
        <Navbar setToken={setToken}/>
        <Routes>
          {/* <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCateory category="mens" />} />
          <Route path='/womens' element={<ShopCateory category="womens" />} />
          <Route path='/kids' element={<ShopCateory category="kids" />} />
          <Route path='/product' element={<Products />}>
          <Route path=':productId' element={<Products />}/>
          </Route>
        <Route path='/cart' element={<Cart />}/> */}
          {/* <Route path='/myAccount' element={<LoginSignup />}/> */}
          <Route path='/' element={token ? <AllProducts /> : <LoginSignup token={token} setToken={setToken} />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
