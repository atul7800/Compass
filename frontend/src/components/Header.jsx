import React from "react";
import {Compass, Sun, Moon} from "lucide-react";

export default function Header({theme, toggleTheme}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-black text-white dark:bg-white dark:text-black rounded-lg">
            <Compass size={18} className="animate-spin-slow" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
            Compass
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900 text-gray-600 dark:text-neutral-400 transition-all"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
