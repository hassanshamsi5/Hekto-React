// import Navbar from './Component/Navbar/navbar'
// import Home from './Component/HomePage/home'
// import Footer from './Component/Footer/footer'
// import Faq from './Component/FAQ/faq'
// import Error404 from './Component/404/404'
// import Aboutus from './Component/About us/about'
// import ContactUs from './Component/Contact us/contact'
// import MyAccount from './Component/MyAccount/account'
// import OrderCompelete from './Component/OrderCompelete/order'
// import SingleBlog from './Component/Single Blog/single.blog'
// import BlogPage from './Component/BlogPage/blog'
// import Demo from './Component/Demo/demo'
// import ShoppingCArt from './Component/Shopping Cart/shoping'
// import ProductDetail from './Component/Product Detail/product'
// import ShopLeftSidebar from './Component/Shop left sidebar/shopleft'
// import ShopGridDef from './Component/ShopGridDefault/shopgrid'
// import Shoplist from './Component/ShopList/shoplist'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import APi from './Component/apiproducts/api'
// import Signup from './Component/MyAccount/signup'


// function App() {
//     return (
//         <>
//             <Router>
//                 {/* <Navbar /> */}
//                 <Routes>
//                     {/* <Route path="/" element={<Home />} />
//                     <Route path="*" element={<Error404 />} />
//                     <Route path="/contact" element={<ContactUs />} /> */}
//                     <Route path="/" element={<MyAccount />} />
//                     <Route path="/home" element={<Home />} />
//                     {/* <Route path="/blog" element={<BlogPage />} />
//                     <Route path="/product" element={<ProductDetail />} />
//                     <Route path="/shoplist" element={<Shoplist />} />
//                     <Route path="/about" element={<Aboutus />} />
//                     <Route path="/shopingcart" element={<ShoppingCArt />} />
//                     <Route path="/ShopGridDefault" element={<ShopGridDef />} />
//                     <Route path="/APi" element={<APi />} />
//                     <Route path="/signup" element={<Signup />} /> */}
//                     {/* <Faq/> */}
//                     {/* <OrderCompelete/> */}
//                     {/* <SingleBlog/> */}
//                     {/* <Demo /> */}
//                     {/* <ProductDetail/> */}
//                     {/* <ShopLeftSidebar /> */}
//                     <Route />
//                 </Routes>
//                 {/* <Footer /> */}
//             </Router>

//         </>
//     )
// }
// export default App



import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from './Component/MyAccount/account'
import Home from './Component/HomePage/home'
import PrivateRoute from "./Component/protectedroutes/protected";
import AnonymousRoute from "./Component/AnonymousRoute/AnonymousRoute";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/login" element={<MyAccount />} />
                </Route>
                 <Route element={<AnonymousRoute />}>
                    <Route path="/" element={<Home />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
