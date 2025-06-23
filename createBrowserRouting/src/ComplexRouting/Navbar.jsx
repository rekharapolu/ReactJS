import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <section className='w-full h-[60px] bg-[#efefef]'>
            <nav className='flex w-[90%] mx-auto h-[60px] justify-between'>
                <aside className='h-[60px]'>LOGO</aside>
                <aside className='h-[60px]'>
                    <ul className='flex h-[60px] items-center gap-x-5'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </aside>
            </nav>
        </section>
    </>
  )
}

export default Navbar