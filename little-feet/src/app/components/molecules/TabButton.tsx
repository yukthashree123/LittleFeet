"use client";
import React from "react";
import Button from "../atoms/Button";

export default function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      label={label}
      onClick={onClick}
      variant={active ? "primary" : "secondary"}
      className="text-sm"
    />
  );
}
