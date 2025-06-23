import React from 'react'
import MainContent from './MainContent'
import SideNavbar from './SideNavbar'

const LandinPage = () => {
  return (
    <>
        <div className="flex h-[calc(100vh-60px)]">
            <SideNavbar/>
            <div className="flex-grow p-4">
              <MainContent/> 
            </div> 
        </div>
    </>
  )
}

export default LandinPage