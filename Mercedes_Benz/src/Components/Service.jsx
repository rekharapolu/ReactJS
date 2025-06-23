import React from 'react'

let data=[
    {
        url:"https://www.mercedes-benz.co.in/content/dam/hq/passengercars/services/mercedes-me/imgLPtextmediammeid.jpg/1720157488638.jpg?im=Resize=(1280);Crop,rect=(0,280,1280,720)",
        head:"Digital extras for your Mercedes-Benz",
        para:"Simply book additional digital extras and experience your Mercedes-Benz in a new way.",
        b1:"Buy online now"
    },
    {
        url:"https://www.mercedes-benz.co.in/content/dam/india/passengercars/maintenance/service-packages-image1.jpg/1720157898771.jpg?im=Resize=(1280);Crop,rect=(0,119,1280,720)",
        head:"Maintenance and Service",
        para:"Enjoy Peace of Mind with Mercedes-Benz Service, Maintenance and Repair",
        b1:"Learn more"
    },
]
const Service = () => {
  return (
    <div id="servicemain">
      {
        data.map((ele)=>{
            let{url,head,para,b1}=ele
            return(
                <div id="service">
                    <img src={url} alt="" />
                    <div>{head}</div>
                    <p>{para}</p>
                    <button>{b1}</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Service
