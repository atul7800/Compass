import React, {useState} from "react";
import {Sparkles, Trash2, Terminal} from "lucide-react";

export default function ThreadInput({
  text,
  setText,
  onAnalyze,
  isLoading,
  status,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const handleClear = () => setText("");

  const showPlaceholder = !text && !isFocused;

  // Dynamic height configuration based on application phase state
  const heightClass = status === "empty" ? "min-h-[400px]" : "min-h-[160px]";

  return (
    <div className="border-2 bg-white dark:bg-black border-gray-200 dark:border-neutral-800 rounded-xl shadow-sm p-4 transition-all duration-300 relative">
      {/* We apply the dynamic height class to this relative wrapper wrapper container */}
      <div className={`relative ${heightClass} transition-all duration-300`}>
        {/* Your original layout block centering perfect alignment */}
        {showPlaceholder && (
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center select-none animate-fadeIn">
            <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-full text-gray-400 mb-3">
              <Terminal size={20} />
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-neutral-400">
              Paste a customer thread and click{" "}
              <span className="font-semibold text-gray-800 dark:text-neutral-200">
                Analyze Thread
              </span>{" "}
              to coordinate telemetry data.
            </p>
          </div>
        )}

        {/* Interactive Textarea matches the changing parent sizing properties */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full ${heightClass} transition-all duration-300 resize-none bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none text-sm leading-relaxed relative z-10`}
          disabled={isLoading}
        />
      </div>

      {/* Control Footer */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t-2 border-gray-100 dark:border-neutral-900 relative z-10">
        <span className="text-sm text-gray-400 dark:text-neutral-500 font-mono">
          {text.length.toLocaleString()} characters
        </span>

        <div className="flex items-center space-x-2">
          {text && (
            <button
              onClick={handleClear}
              disabled={isLoading}
              className="text-p-2 text-gray-400 hover:text-gray-600 dark:hover:text-neutral-300 rounded-lg transition-colors"
              title="Clear text"
            >
              <Trash2 size={16} />
            </button>
          )}
          <button
            onClick={onAnalyze}
            disabled={isLoading || !text.trim()}
            className="flex items-center space-x-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            <Sparkles size={14} />
            <span>{isLoading ? "Analyzing..." : "Analyze Thread"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
