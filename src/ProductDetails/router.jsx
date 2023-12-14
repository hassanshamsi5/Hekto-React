import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails'
import API from './api'
import Navbar from './Navbar';
import Home from './home';
import AddToCart from './addToCart';
import Signin from './signin'
import Signup from './signup'

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/api" element={<API/>} />
                <Route path="/addToCart" element={<AddToCart />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}
export default App