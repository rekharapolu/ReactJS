import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <>
        <aside className='w-[250px] h-[calc(100vh-60px)] bg-[#888] overflow-hidden'>
            <ul className='flex flex-col gap-4'>
                <li>
                    <NavLink to="/">HTML</NavLink>
                </li>
                <li>
                    <NavLink to="/css">CSS</NavLink>
                </li>
                <li>
                    <NavLink to="/javascript">Javascript</NavLink>
                </li>
                <li>
                    <NavLink to="/reactjs">ReactJS</NavLink>
                </li>
            </ul>
        </aside>
    </>
  )
}

export default SideNavbar