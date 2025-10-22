"use client";
import React from "react";
import styles from "./searchBar.module.css";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Search products..."}
      className={styles.searchInput}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
