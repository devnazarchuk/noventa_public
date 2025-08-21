import React from 'react';

export function CardGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center ${className || ''}`}
      role="list"
      aria-label="Card grid"
    >
      {children}
    </div>
  );
} 