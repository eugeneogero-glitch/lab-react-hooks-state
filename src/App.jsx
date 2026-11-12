import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample products dataset (adjust based on your template data)
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Apples", category: "Fruits" },
    { id: 3, name: "Bread", category: "Bakery" },
  ];

  const handleAddToCart = (productName) => {
    setCart((prevCart) => [...prevCart, `${productName} is in your cart!`]);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Dropdown Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
