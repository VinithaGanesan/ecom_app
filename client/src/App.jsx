import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Fragment, useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'
import PageNotFound from './pages/PageNotFound'
import Policy from './pages/Policy'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import Layout from './components/Layout/Layout'


function App() {
  const [order, setOrder] = useState(null);

  const { isLoggedIn } = useSelector(state => state.user);

  // function renderRoutes(isLoggedIn = false) {
  //   if (!isLoggedIn) {
  //     return (
  //       <>
  //         <Route path='/login' element={<Login />} />
  //         <Route path='/signup' element={<SignUp />} />
  //         <Route path='/' element={<Home />} />
  //         <Route path='/shop' element={<Shop />} />
  //         <Route path='*' element={<PageNotFound />} />
  //         <Route path='/policy' element={<Policy />} />
  //         <Route path='/about' element={<About />} />
  //         <Route path='/contact' element={<Contact />} />
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <Route path='/' element={<Home />} />
  //         <Route path='/shop' element={<Shop />} />
  //         <Route path='/cart' element={<Cart />} />
  //         <Route path='/checkout' element={<Checkout setOrder={setOrder} />} />
  //         <Route path='/order-confirmation' element={<Order order={order} />} />
  //         <Route path='/filter-data' element={<FilterData />} />
  //         <Route path='/product/:id' element={<ProductDetail />} />
  //         <Route path='*' element={<PageNotFound />} />
  //         <Route path='/policy' element={<Policy />} />
  //         <Route path='/about' element={<About />} />
  //         <Route path='/contact' element={<Contact />} />
  //       </>
  //     )
  //   }
  // }






  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        {/* {renderRoutes(isLoggedIn)} */}
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout setOrder={setOrder} />} />
        <Route path='/order-confirmation' element={<Order order={order} />} />
        <Route path='/filter-data' element={<FilterData />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup'  element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
