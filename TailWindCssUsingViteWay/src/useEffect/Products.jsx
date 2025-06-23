import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-xl font-bold text-center mb-5">Products</h1>

      {products.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-sm w-64">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-gray-600 text-sm">{product.description.slice(0, 80)}...</p>
              <p className="font-bold text-gray-900 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-gray-500 mt-5">Loading...</h2>
      )}
    </div>
  );
};

export default Products;
