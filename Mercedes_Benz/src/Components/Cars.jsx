import React from 'react'

let car=[
    {
        url:"https://www.mercedes-benz.co.in/content/dam/india/passengercars/new-homepage/GLA.jpg/1736432370495.jpg?im=Resize=(1200);Crop,rect=(0,0,1200,2134)",
        para:"Dynamic all the way.",
        head:"The new GLA",
        b1:"Find available cars"
    },
    {
        url:"https://www.mercedes-benz.co.in/content/dam/retail/india/amgc_63image_adapt.jpg/1736432370495.jpg?im=Resize=(1200);Crop,rect=(0,0,1200,2134)",
        para:"Here's to the heart.",
        head:"The all-new Mercedes-AMG C 63 S E Performance",
        b1:"Learn more"
    },
    {
        url:"https://www.mercedes-benz.co.in/content/dam/hq/passengercars/campaigns/compact-car-range/benefits/12-2023/images/mercedes-benz-compact-car-range-benefits-mbux-1884x1884-12-2023.jpg/1736432370495.jpg?im=Resize=(1200);Crop,rect=(262,0,675,1200)",
        para:"Explore our Online Store.",
        head:"Browse & Buy your Mercedes-Benz",
        b1:"Find available cars"
    }
]
const Cars = () => {
  return (
    <div id="carmain">
      {car.map((element)=>{
        let {url,para,head,b1}=element
        return(
            <div id="cars">
                <img src={url} alt="" />
               <section>
                    <p>{para}</p>
                    <h1>{head}</h1>
                    <button>{b1}</button>
               </section>
            </div>
        )
      })}
    </div>
  )
}

export default Cars
