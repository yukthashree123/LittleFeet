"use client";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const base = "px-4 py-2 rounded-full font-medium transition-all";
  const styles =
    variant === "primary"
      ? "bg-pink-500 text-white hover:bg-pink-600"
      : "bg-white text-gray-700 hover:bg-pink-100";

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
