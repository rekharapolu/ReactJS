import React, { useState, useEffect } from "react";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const url = "https://fakestoreapi.com/carts";

  useEffect(() => {
    const getCarts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCarts(data);
    };

    getCarts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-[#fce4ec]"> {/* Soft pink background for the container */}
      {!carts.length ? (
        <h2 className="text-center text-gray-500 mt-5">Loading...</h2>
      ) : (
        carts.map((cart, index) => (
          <div className="bg-[#F7F5AA] border border-gray-300 rounded-lg w-80 p-6 text-center shadow-lg 
          transition-transform transform hover:scale-105 hover:shadow-2xl"> 
            <h2 className="text-xl font-semibold mb-4">Cart ID: {cart.id}</h2>
            <p className="text-gray-600 mb-2">User ID: {cart.userId}</p>
            <p className="text-gray-600 mb-4">Date: {cart.date}</p>

            <h3 className="font-medium mb-2">Products:</h3>
            <ul className="text-sm text-gray-700">
              {cart.products.map((product, index) => (
                <li key={index} className="border-b py-1">
                  Product ID: {product.productId} | Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Carts;
