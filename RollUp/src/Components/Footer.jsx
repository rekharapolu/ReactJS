import React from 'react'
import FooterChill from './FooterChill'


let obj=[
    {
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTh6M85soVP1FRofJwb4AUoe3s2qj7JwpSvtxdWq3QjFNuxKjl-GAS4u1RtjOKvVmNkM&usqp=CAU",
        head:"The web,Nodes....",
        conte:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Distinctio, accusamus quis assumenda dolor ut veniam mollitia animi rerum consequatur explicabo",
          foot:"See all formate ->"
    },
    {
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpfMaaT-l27ZbDbmlxWmWmplCKcYMNLi2Dw&s",
        head:"Tree-shaking",
        conte:" sit amet consectetur adipisicing elit.Distinctio, accusamus quis assumenda dolor ut veniam mollitia animi rerum consequatur explicabo",
        foot:"learn more->"
    },
    {
        icon:"https://rollupjs.org/vitejs-logo.svg",
        head:"Code-splitting without overhead",
        conte:"Split code based on different entry points and dynamic imports by just using the import mechanism of the output format instead of customer loader code.",
        foot:"How to use code-splitting ->"
    },
    // {
    //     icon:"https://images.emojiterra.com/google/android-12l/512px/1f5e1.png",
    //     head:"Code-splitting without overhead",
    //     conte:"An easy to learn plugin API that allows you to implement powerful code injections and transformations with little code. Adopted by Vite and WMR.",
    //     foot:"See al options.. ->"
    // }

]


const Footer = () => {
  return (
    <div>
      <FooterChill   obj={obj}/>
      <FooterChill   obj={obj}/>
    </div>
  )
}

export default Footer
