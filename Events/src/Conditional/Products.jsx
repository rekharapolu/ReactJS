import React, { useEffect, useState } from 'react'
import Loader from './Loader';

const Products = () => {
    let [state,setState]=useState(null)
    async function getProducts() {
        let result=await fetch("https://fakestoreapi.com/products")
        console.log(result);
        let data=await result.json();
        console.log(data);
        setState(data);   //!setting the new value value inside the state
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProducts()
        },2000)
    })
    return (<>
        {
            state==null?<Loader/>: state.map((Product)=>{
                let {id,title,price,category,description,image}=Product
                return<>
                    <section style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h1>{id}</h1>
                        <h1>{title}</h1>
                        <h1>{price}</h1>
                        <h1>{category}</h1>
                        <h1>{description}</h1>
                        <h1><img src={image} height={100} width={100}/></h1><br />
                    </section>
                </>
            })
        }
        </>
      )
}

export default Products