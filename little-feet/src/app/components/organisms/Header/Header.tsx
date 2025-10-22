"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import styles from "./header.module.css";
import { useCart } from "@/app/context/cartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">👣 LittleFeet</Link>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About</Link>
      </nav>

      <div className={styles.cartIconWrapper}>
        <Link href="/cart" className={styles.cartLink}>
          <ShoppingCart className={styles.cartIcon} />
          {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
