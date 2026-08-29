"use client";
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
};

export default function Button({ variant = 'solid', className = '', children, ...rest }: Props) {
  if (variant === 'outline') {
    return (
      <button {...rest} className={`outline-btn inline-flex items-center justify-center gap-2 ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <button {...rest} className={`gradient-btn inline-flex items-center justify-center gap-2 ${className}`}>
      {children}
    </button>
  );
}
