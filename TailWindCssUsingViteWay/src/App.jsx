import React from 'react'
import InputFocus from './InputFocus'
import KoiKoi from './KoiKoi'
import MultipleVideos from './MultipleVideos';
import UncontrolledForm from './forms/Uncontrolledform';
import ControlledForm from './forms/Controlledform';
import CheckBoxUingControlledForm from './forms/CheckBoxUingControlledForm';
import form1 from './forms/FormsExample/OrganizationForm';
import OrganizationForm from './forms/FormsExample/OrganizationForm';
import EmployeeRegistrationForm from './forms/FormsExample/EmployeeRegistrationForm';
import FeedbackForm from './forms/FeedbackForm';
import SingleHandleChange from './forms/SingleHandleChange';
import { ToastContainer, toast } from 'react-toastify';
import GrandParent from './forms/PropDrilling/GrandParent';
import CounterContext from './Context/CounterContext';
// import Increment from './Context/Increment';
// import Decrement from './Context/Decrement';
import ThemeProvider from './Context/ThemeContext';
import { ThemeContext } from './Context/ThemeContext';
import CountProvider from './useEffect/CountContext'; // Import the provider
import Counter from './useEffect/Counter';
import Increment from './useEffect/Increment';
import Decrement from './useEffect/Decrement';
import Users from './useEffect/Users';
import Carts from './useEffect/Carts';
import Products from './useEffect/Products';


const App = () => {
  // let alllinks=["Home","About","Register","Login","Contact Us"]
  // const { theme } = useContext(ThemeContext);
  return (
    <>
    {/* <ToastContainer position="top-center" /> */}
    {/* <nav>
      <ul className='flex justify-evenly items-center bg-[yellow] w-full h-20'>
        {
           alllinks.map((link)=>{
             return <li><a href="" className='text-orange-300'>{link}</a></li>
           })
        }
       </ul>
    </nav> */}
    {/* <InputFocus/> */}
    {/* <KoiKoi/> */}
    {/* <MultipleVideos/> */}
    {/* <UncontrolledForm/> */}
    {/* <ControlledForm/> */}
    {/* <CheckBoxUingControlledForm/> */}
      {/* <OrganizationForm/>
      <EmployeeRegistrationForm/>
      <FeedbackForm/> */}
      {/* <SingleHandleChange/> */}
      {/* <GrandParent/> */}
      {/* <CounterContext>
        <Increment/>
        <Decrement/>
        </CounterContext> */}

      {/* <ThemeProvider>
        <div style={{ background: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#000" : "#fff", height: "80vh" }}>
          <CounterContext>
            <Increment />
            <Decrement />
          </CounterContext>
        </div>
      </ThemeProvider> */}

    {/* <Users/> */}

    {/* <CountProvider>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Counter />
                <Increment />
                <Decrement />
            </div>
        </CountProvider> */}

        {/* <Carts/> */}
        <Products/>
    </>
  )
}

export default App
