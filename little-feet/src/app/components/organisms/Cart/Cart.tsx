"use client";
import React from "react";
import { useCart } from "@/app/context/cartContext";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartFlex}>
      <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty 🛒</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.summary}>
              <h3>Total: ₹{total}</h3>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
