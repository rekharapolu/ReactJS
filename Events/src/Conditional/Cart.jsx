import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Carts = () => {
    const [state, setState] = useState(null);

    // Fetch data from the API
    async function getCarts() {
        const result = await fetch("https://fakestoreapi.com/carts");
        const data = await result.json();
        setState(data);   //!setting the new value inside the state
    }

    // Fetch carts data only once on mount
    useEffect(() => {
        setTimeout(() => {
            getCarts();
        }, 2000);
    }, []); // ✅ Added dependency array to prevent infinite calls

    return (
        <>
            {state === null ? (
                <Loader />
            ) : (
                state.map(({ id, userId, date, products }) => (
                    <section key={id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h2>Cart ID: {id}</h2>
                        <p>User ID: {userId}</p>
                        <p>Date: {date}</p>
                        <h3>Products:</h3>
                        <ul>
                            {products.map(({ productId, quantity }, index) => (
                                <li key={index}>
                                    Product ID: {productId}, Quantity: {quantity}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))
            )}
        </>
    );
};

export default Carts;
