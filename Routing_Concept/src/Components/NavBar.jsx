import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <section className='bg-[#efefef]'>
            <nav className='w-[90%] mx-auto h-[50px]'> 
                <aside>
                    <img src={""} alt="" />
                </aside>
                <aside className='h-[50px]'>
                    <ul className='flex justify-end h-[50px] items-center gap-x-5'>
                        <li>
                            {/* <Link to='/'>Home</Link> */}
                            <NavLink to='/' className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>Home</NavLink>
                        </li>
                        <li>
                            {/* <Link to='/about'>About</Link> */}
                            <NavLink to='/about' className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>About</NavLink>
                        </li>
                        <li>
                            {/* <Link to='/contact'>Contact</Link> */}
                            <NavLink to='/contact' className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>Contact</NavLink>
                        </li>
                        <li>
                            {/* <Link to='/login'>Login</Link> */}
                            <NavLink to='/login' className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>Login</NavLink>
                        </li>
                        <li>
                            {/* <Link to='/register'>Register</Link> */}
                            <NavLink to='/register' className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>Register</NavLink>
                        </li>   
                        <li>
                            <NavLink to="/products" className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>All Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive})=>{
                                return isActive==true?"text-red-500":"text-green-500"
                            }}>All Users</NavLink>
                        </li>
                    </ul>
                </aside>
            </nav>
        </section>
    </>
  )
}

export default NavBar