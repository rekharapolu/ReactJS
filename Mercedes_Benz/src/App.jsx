import React from 'react'
import Navbar from './Components/Navbar'
import Nav2 from './Components/Nav2'
import Home from './Components/Home'
import Recommendations from './Components/Recommendations'
import Cars from './Components/Cars'
import Perfect from './Components/Perfect'
import Service from './Components/Service'
import DefiningClass from './Components/DefiningClass'
import History from './Components/History'
import Disclaimer from './Components/Disclaimer'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Up from './Components/Up'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Nav2/>
      <Home/>
      <Recommendations/>
      <Cars/>
      <Perfect/>
      <Service/>
      <DefiningClass/><br/><br/><br/>
      <History/><br/><br/><br/>
      <Disclaimer/><br/><br/><br/><br/><br/>
      <Cart/><br/><br/>
      <Up/>
      <Footer/>
    </div>
  )
}

export default App
