import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './MyComponents/Navbar'
// import Home from './MyComponents/Home';
import Users from './MyComponents/Users'
import Products from './MyComponents/Products'
import Carts from './MyComponents/Carts'
import AllProducts from './Components/AllProducts'
import ProductDetails from './Components/ProductDetails'
import AllUsers from './Components/AllUsers'
import UserDetails from './Components/UserDetails'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <>
    <div>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/products' element={<AllProducts/>}/>
                <Route path='/products/:id' element={<ProductDetails/>}/>
                <Route path='/users' element={<AllUsers/>}/>
                <Route path='/users/:id' element={<UserDetails/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    {/* <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/carts' element={<Carts/>}/>
            </Routes>
        </BrowserRouter>
    </div>  */}
    </>

  )
}

export default App