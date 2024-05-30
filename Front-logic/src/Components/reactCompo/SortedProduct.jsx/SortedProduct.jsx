import React, { useState, useEffect } from "react";

const SortedProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "popularity") {
      return b.rating - a.rating;
    } else if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "discountPercentage") {
      return b.discountPercentage - a.discountPercentage;
    }
  });

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <label className="block">
            <span className="text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
              <option value="discountPercentage">Discount</option>
            </select>
          </label>
        </div>
        <ul>
          {sortedProducts.map((product) => (
            <li key={product.id} className="border-t border-gray-200">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-gray-700 mt-2">Price: {product.price}</p>
                <p className="text-gray-700">Popularity: {product.rating}</p>
                <p className="text-gray-700">
                  Discount: {product.discountPercentage}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortedProducts;
