import React from "react";

export function Skeleton({className = ""}) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-neutral-800 rounded ${className}`}
    />
  );
}

export function LoadingState() {
  const steps = [
    "Analyzing customer thread...",
    "Searching internal documentation arrays...",
    "Querying vector database for historical tickets...",
    "Synthesizing support-ready response...",
  ];

  return (
    <div className="space-y-6">
      {steps.map((text, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-900 rounded-xl p-6 flex items-center space-x-4"
        >
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-neutral-300 animate-pulse">
                {text}
              </span>
              <span className="text-xs text-gray-400 dark:text-neutral-500">
                Processing...
              </span>
            </div>
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-2 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
