import React from "react";

function Cart({ cart }) {
  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
