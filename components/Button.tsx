"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  children: React.ReactNode;
};

export default function Button({ variant = "solid", className = "", children, ...rest }: Props) {
  const styles =
    variant === "outline" ? "btn-secondary" : variant === "ghost" ? "btn-ghost" : "btn-primary";

  return (
    <button {...rest} className={`${styles} ${className}`}>
      {children}
    </button>
  );
}
