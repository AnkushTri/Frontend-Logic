import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        {product.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index}`}
              className="w-full mb-4"
            />
          ))}
        </div>
        <div>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-700">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
