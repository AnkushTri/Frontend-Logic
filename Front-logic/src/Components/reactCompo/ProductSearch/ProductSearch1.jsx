import React, { useState, useEffect } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products); // Reset filteredProducts when searchTerm is empty
      return;
    }

    const delaySearch = setTimeout(() => {
      setIsTyping(false);
      filterProducts();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setIsTyping(true);
  };

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
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
    </div>
  );
};

export default ProductSearch;
