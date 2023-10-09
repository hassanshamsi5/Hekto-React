import Navbar from './Component/Navbar/navbar'
import Home from './Component/HomePage/home'
import Footer from './Component/footer/footer'
import Faq from './Component/FAQ/faq'
import Error404 from './Component/404/404'
import Aboutus from './Component/About us/about'
import ContactUs from './Component/Contact us/contact'
import MyAccount from './Component/MyAccount/account'
import OrderCompelete from './Component/OrderCompelete/order'

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Error404/> */}
        {/* <Faq/> */}
        {/* <Aboutus /> */}
        {/* <ContactUs/> */}
        <OrderCompelete/>
        {/* <MyAccount/> */}
        <Footer />
      </div>
    </>
  )
}
export default App
