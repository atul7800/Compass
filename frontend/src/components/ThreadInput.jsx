import React from "react";
import {Sparkles, Trash2} from "lucide-react";

export default function ThreadInput({text, setText, onAnalyze, isLoading}) {
  const handleClear = () => setText("");

  return (
    <div className="border-2 bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 rounded-xl shadow-sm p-4 transition-colors duration-200">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste customer emails, Slack threads, or support tickets here..."
        className="w-full min-h-[160px] resize-y bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-600 focus:outline-none text-sm leading-relaxed"
        disabled={isLoading}
      />

      <div className="flex items-center justify-between pt-3 mt-2 border-t-2 border-gray-100 dark:border-neutral-900">
        <span className="text-xs text-gray-400 dark:text-neutral-500 font-mono">
          {text.length.toLocaleString()} characters
        </span>

        <div className="flex items-center space-x-2">
          {text && (
            <button
              onClick={handleClear}
              disabled={isLoading}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-neutral-300 rounded-lg transition-colors"
              title="Clear text"
            >
              <Trash2 size={16} />
            </button>
          )}
          <button
            onClick={onAnalyze}
            disabled={isLoading || !text.trim()}
            className="flex items-center space-x-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-all bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            <Sparkles size={14} />
            <span>{isLoading ? "Analyzing..." : "Analyze Thread"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
