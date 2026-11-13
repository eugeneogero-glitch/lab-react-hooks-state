import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 1.5 },
  { id: 2, name: "Milk", category: "Dairy", price: 2.5 },
  { id: 3, name: "Banana", category: "Fruits", price: 1.0 },
  { id: 4, name: "Cheese", category: "Dairy", price: 4.0 },
];

const ProductList = ({ products, onAddToCart }) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
