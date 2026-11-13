import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory,
        );

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
