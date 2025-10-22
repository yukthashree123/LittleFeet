"use client";
import React, { useState } from "react";
import CategoryGrid from "../components/organisms/CategoryGrid/CategoryGrid";
import styles from "./categories.module.css";
import SearchBar from "../components/molecules/SearchBar/SearchBar";
import FilterDropdown from "../components/molecules/FilterDropdown/FilterDropdwon";

const categoryData = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1072" },
  { name: "Toys", image: "https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" },
  { name: "Diapers", image: "https://images.unsplash.com/photo-1699877260026-8ecfdfc3ee86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=981" },
  { name: "Feeding", image: "https://images.unsplash.com/photo-1747921719174-2d385e2f52b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { name: "Bath", image: "https://images.unsplash.com/photo-1546093954-5d4b2338b291?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { name: "Travel", image: "https://images.unsplash.com/photo-1559135141-2bea6465fccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=718" },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCategories = categoryData.filter((c) => {
    const matchesFilter = filter ? c.name === filter : true;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Explore Categories</h1>

      <div className={styles.controls}>
        <SearchBar onSearch={setSearch} />
        <FilterDropdown
          options={categoryData.map((c) => c.name)}
          onChange={setFilter}
        />
      </div>

      <CategoryGrid categories={filteredCategories} />
    </main>
  );
}
