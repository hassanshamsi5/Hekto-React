import Navbar from './Component/Navbar/navbar'
import Home from './Component/HomePage/home'
import Footer from './Component/footer/footer'
import Faq from './Component/FAQ/faq'
import Error404 from './Component/404/404'
import Aboutus from './Component/About us/about'
import ContactUs from './Component/Contact us/contact'
import MyAccount from './Component/MyAccount/account'
import OrderCompelete from './Component/OrderCompelete/order'
import SingleBlog from './Component/Single Blog/single.blog'
import BlogPage from './Component/BlogPage/blog'
import Demo from './Component/Demo/demo'
import ShoppingCArt from './Component/Shopping Cart/shoping'
import ProductDetail from './Component/Product Detail/product'
import ShopLeftSidebar from './Component/Shop left sidebar/shopleft'
import ShopGridDef from './Component/Shop Grid Default/shopgrid'
import Shoplist from './Component/ShopList/shoplist'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/myAccount" element={<MyAccount />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/shoplist" element={<Shoplist />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/shopingcart" element={<ShoppingCArt />} />
            {/* <Faq/> */}
            {/* <Aboutus /> */}
            {/* <OrderCompelete/> */}
            {/* <SingleBlog/> */}
            {/* <Demo /> */}
            {/* <ShoppingCArt/> */}
            {/* <ProductDetail/> */}
            {/* <ShopLeftSidebar /> */}
            {/* <ShopGridDef /> */}
            {/* <Shoplist /> */}
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  )
}
export default App
