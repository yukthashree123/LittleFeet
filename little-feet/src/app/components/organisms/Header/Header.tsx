import React from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Little Feet</h1>
      <nav>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
