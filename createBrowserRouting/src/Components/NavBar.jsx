import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <section className="bg-[#efefef]">
            <nav className="w-[90%] mx-auto h-[50px] flex justify-between items-center">            
                <aside>
                    <div className="text-lg font-bold">Logo</div>
                </aside>               
                <aside>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="hover:text-blue-500">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="hover:text-blue-500">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allusers" className="hover:text-blue-500">All Users</NavLink>
                        </li>
                    </ul>
                </aside>
            </nav>
        </section>

    </>
  )
}

export default NavBar