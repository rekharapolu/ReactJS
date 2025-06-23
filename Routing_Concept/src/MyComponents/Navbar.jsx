import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <section className='bg-[#efefef]'>
            <nav className='w-[90%] mx-auto h-[50px]'>
                <aside>
                    <img src="" alt="" />
                </aside>
                <aside className='h-[50px]'>
                    <ul className='flex justify-end h-[50px] items-center gap-x-5'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/carts'>Carts</Link></li>
                    </ul>
                </aside>
            </nav>
        </section>
    </>
  )
}

export default Navbar