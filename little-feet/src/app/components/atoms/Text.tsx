import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, variant = "body", className }) => {
  const styles = {
    title: "text-2xl font-semibold text-gray-800",
    subtitle: "text-lg text-gray-700",
    body: "text-sm text-gray-600",
  };
  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
};

export default Text;
