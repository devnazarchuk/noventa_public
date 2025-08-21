import React from 'react';

export function CardGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 gap-y-4 justify-center bg-transparent dark:bg-transparent ${className || ''}`}
      role="list"
      aria-label="Card grid"
    >
      {children}
    </div>
  );
} 