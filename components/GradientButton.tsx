import React from 'react';

export default function GradientButton({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={`gradient-btn transition-transform active:translate-y-0.5 ${className}`}>
      {children}
    </button>
  );
}
