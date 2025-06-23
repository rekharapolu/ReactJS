import React, { useState, useEffect } from "react";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const url = "https://fakestoreapi.com/carts";

  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCarts(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    getCarts();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">Shopping Carts</h1>

      {carts.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {carts.map((cart) => (
            <div key={cart.id} className="bg-white shadow-lg p-4 rounded-lg w-full sm:w-80">
              <h2 className="text-lg font-semibold">Cart ID: {cart.id}</h2>
              <p className="text-gray-600">User ID: {cart.userId}</p>
              <p className="text-gray-600">Date: {cart.date}</p>
              <h3 className="font-medium mt-2">Products:</h3>
              <ul className="text-sm text-gray-700">
                {cart.products.map((product, index) => (
                  <li key={index} className="border-b py-1">
                    Product ID: {product.productId} | Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-gray-500 mt-5">Loading...</h2>
      )}
    </div>
  );
};

export default Carts;
