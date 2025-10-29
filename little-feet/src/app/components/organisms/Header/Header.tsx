"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.innerContent}>
          <div className={styles.logo}>
            <Link href="/">Little Feet</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className={styles.rightSection}>
            {/* Cart */}
            <Link href="/cart" className={styles.cartLink}>
              <ShoppingCart className={styles.cartIcon} />
              <span className={styles.cartCount}>2</span>
            </Link>

            {/* Hamburger Menu for Mobile */}
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
            <div className={styles.sidebarHeader}>
              <h2>Menu</h2>
              <button
                className={styles.closeButton}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <nav className={styles.sidebarNav}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/categories" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
