import React, { useState, useEffect } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products.slice(0, 6));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(showAll ? products : products.slice(0, 6));
      return;
    }

    const delaySearch = setTimeout(() => {
      filterProducts();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, products, showAll]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-md p-4"
          >
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
      {!searchTerm &&
      !showAll && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={toggleShowAll}
        >
          See All
        </button>
      )}
      {showAll && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={toggleShowAll}
        >
          Show Less
        </button>
      )
    }
    </div>
  );
};

export default ProductSearch;
