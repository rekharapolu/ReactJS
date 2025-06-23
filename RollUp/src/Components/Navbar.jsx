import React from 'react'

const Navbar = () => {
  return (
   <section className='navbar'>

        <aside className='asideone'>
                <div className='firstpart'>
                    
                <img class="VPImage logo" src="https://rollupjs.org/rollup-logo.svg" alt="" data-v-8426fc1a=""/>
                <h4>Rollup</h4>
                <i class='bx bx-search-alt-2'></i>
                <input type="text" placeholder='search'  /> 
                <button>ctrlK</button>
                </div>

                <div className='secondpart'>
                    <ul type="none">
                        <li>guide</li>
                        <li>repl</li>
                        <li>chat
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </li>
                        <li>opencollective 
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </li>
                    </ul>|
                    <i class="fa-solid fa-language"></i>
                    {/* <button class="VPSwitch VPSwitchAppearance" type="button" role="switch" title="Switch to dark theme" aria-checked="false" data-v-6c893767="" data-v-5337faa4="" data-v-1d5665e3=""><span class="check" data-v-1d5665e3=""><span class="icon" data-v-1d5665e3=""><span class="vpi-sun sun" data-v-5337faa4=""></span><span class="vpi-moon moon" data-v-5337faa4=""></span>
                    </span></span></button>| */}|
                    <i class='bx bxs-message-rounded-dots'></i>|
                    <i class='bx bxl-github'></i>|
                </div>
        </aside>
    
   </section>
  )
}

export default Navbar

// https://rollupjs.org/vitejs-logo.svg   power
