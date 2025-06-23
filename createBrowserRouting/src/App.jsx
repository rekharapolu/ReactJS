import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import LandinPage from './ComplexRouting/LandinPage';
import Navbar from './ComplexRouting/Navbar'
import Counter from './UseReducer/Counter'
import Todo from './UseReducer/Todo'



const App = () => {
  return (
  //! createBrowsserRoutingg...
    // <div>
    //   {/* <NavBar/>
    //    <Outlet/> //! it is responsible to render the child routes */}
    //   <SignupForm/>
    //   <LoginForm/>
    // </div>
  //! Complex routing...
      // <div>
      //   <Navbar/>
      //   <LandinPage/>
      // </div>
      //! UseReducer
      // <Counter/>
      <Todo/>
  )
}

export default App