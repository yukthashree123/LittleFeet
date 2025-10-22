"use client";
import React from "react";
import styles from "./categoryGrid.module.css";
import Image from "next/image";

interface Category {
  name: string;
  image: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className={styles.grid}>
      {categories.map((cat) => (
        <div
          key={cat.name}
          style={{ width: "300px", height: "300px", position: "relative" }}
        >
          <Image
            src={cat.image}
            alt={cat.name}
            className={styles.image}
            width={300}
            height={300}
          />
          <p className={styles.name}>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
