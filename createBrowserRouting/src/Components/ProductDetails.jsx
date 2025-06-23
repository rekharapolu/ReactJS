import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    let location=useLocation();
    console.log(location.state);
    let { title, price, description, category, image } = location.state;


  return (
    <>
        <section className='w-1/2 mt-10 mx-auto p-5 bordeer-2 border-[#999] bg-[#efefef] flex items-center gap-x-5'>
            <aside>
                <img src={image} className='mix-blend-multiply h-full w-full object-contain' alt="" />
            </aside>
            <aside>
              <h1 className='border-b-[0.5px] border-[#888] pb-2'>{category}</h1>
              <h2 className='border-b-[0.5px] border-[#888] pb-2'>{title}</h2>
              <h3 className='border-b-[0.5px] border-[#888] pb-2'>${price}</h3>
              <p>{description}</p>
            </aside>
        </section>
    </>
  )
}

export default ProductDetails  