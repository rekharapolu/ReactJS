import React from 'react'
import { createElement } from 'react';

const FooterChill = (pro) => {

  return <>
  <section id='footer'>
  { 
        pro.obj.map((ele)=>{
                let{icon,head,conte,foot}=ele
                return<>
                <div className='boxes'>
                            <div className='globe1'>
                            <img src={icon} alt=""  style={{height:'20px',width:'20px'}}/>
                            </div>
                    <div className='hed'>
                    <h4>{head}</h4>
                    </div>
                    <div className='conte'>
                    <p>{conte}</p>
                    </div>
                    <div className='foote'>
                    <p>{foot}</p>
                    </div>
                </div>
                
                </>
        })
       
}
</section>
    </>
  
}

export default FooterChill
