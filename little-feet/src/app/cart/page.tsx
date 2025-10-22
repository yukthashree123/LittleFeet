"use client";
import React from "react";
import Cart from "../components/organisms/Cart/Cart";

export default function CartPage() {
  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Your Cart 🛍️</h1>
      <Cart />
    </main>
  );
}
