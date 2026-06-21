import React from "react";

export function Card({children, className = ""}) {
  return (
    <div
      className={`
        rounded-xl 
        border-2 /* ← Centralized thick layout line weight */
        border-gray-200 dark:border-neutral-800 
        bg-white dark:bg-transparent 
        p-5 
        w-full 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardTitle({children, className = ""}) {
  return (
    <h3
      className={`text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-neutral-400 mb-4 ${className}`}
    >
      {children}
    </h3>
  );
}
