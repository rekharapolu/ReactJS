import React from 'react'

const Nav = () => { 
  return (
    <div>
        <nav className='border-2 h-12 bg-black px-2 py-2 '>
            <ul className='flex justify-around text-white'>
              
                <div className='w-170'>
                <li className='bg-black ps-8 '><img className='h-8 ' src="https://babeljs.io/img/babel.svg" alt="Babel logo"></img></li>
                </div>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Setup</a></li>
                <li><a href="#">Try it out</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Blog</a></li>

                <a href="#"><i class='bx bx-search-alt-2'></i>
                <input type="text" placeholder='search'  /> 
                </a>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="">Github</a></li>
                <li><a href=""><svg viewBox="0 0 24 24" width="24" height="24" class="lightToggleIcon_lgto"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg></a></li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav
