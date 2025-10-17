"use client";
import React, { useState } from "react";
import TabButton from "../molecules/TabButton";

const categories = ["All", "Clothing", "Toys", "Accessories", "Bath", "Feeding"];

export default function Navbar() {
  const [active, setActive] = useState("All");

  return (
    <nav className="flex justify-center gap-4 bg-pink-100 py-4 shadow-md">
      {categories.map((cat) => (
        <TabButton
          key={cat}
          label={cat}
          active={active === cat}
          onClick={() => setActive(cat)}
        />
      ))}
    </nav>
  );
}
