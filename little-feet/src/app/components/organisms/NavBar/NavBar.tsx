"use client";
import Link from "next/link";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
};

export default NavBar;
