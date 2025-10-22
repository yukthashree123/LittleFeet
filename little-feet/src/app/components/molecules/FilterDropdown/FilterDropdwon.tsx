"use client";
import React from "react";
import styles from "./filterDropdown.module.css";

interface FilterDropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onChange }) => {
  return (
    <select className={styles.dropdown} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Categories</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
