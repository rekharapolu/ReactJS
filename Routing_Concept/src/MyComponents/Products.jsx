import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50">
      {!products.length ? (
        <h2 className="text-center text-gray-500 mt-5">Loading...</h2>
      ) : (
        products.map((product) => (
          <div key={product.id} className="bg-teal-100 border border-gray-300 rounded-lg w-64 p-6 text-center shadow-md
           transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 80)}...</p>
            <p className="font-bold text-gray-900">${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
