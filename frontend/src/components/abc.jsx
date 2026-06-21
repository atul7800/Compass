import React, {useState} from "react";
import {Sparkles, CornerDownLeft, Terminal, ChevronRight} from "lucide-react";

export default function ThreadInput({text, setText, onAnalyze, isLoading}) {
  const [isFocused, setIsFocused] = useState(false);

  // Show the terminal layout overlay only if the field is empty AND not focused
  const showPlaceholder = !text && !isFocused;

  return (
    <div className="w-full rounded-xl border-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden transition-all focus-within:border-gray-400 dark:focus-within:border-neutral-600 relative">
      <div className="p-4 relative min-h-36">
        {/* Dynamic Terminal Prompt Placeholder */}
        {showPlaceholder && (
          <div className="absolute inset-4 pointer-events-none flex flex-col space-y-2 font-mono text-xs text-gray-400 dark:text-neutral-600 select-none animate-fadeIn">
            <div className="flex items-center space-x-2 opacity-80">
              <Terminal
                size={14}
                className="text-gray-400 dark:text-neutral-500"
              />
              <span>compass-copilot-v4 // session_init</span>
            </div>
            <div className="flex items-start space-x-1.5 pt-1">
              <ChevronRight
                size={14}
                className="text-gray-400 dark:text-neutral-500 shrink-0 mt-0.5"
              />
              <span className="text-gray-500 dark:text-neutral-500 leading-relaxed">
                Paste a customer support thread conversation here to coordinate
                telemetry data...
              </span>
            </div>
          </div>
        )}

        {/* Real Interactive Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-32 bg-transparent resize-none text-sm font-sans outline-none text-gray-900 dark:text-neutral-100 placeholder-transparent relative z-10"
          disabled={isLoading}
        />
      </div>

      {/* Action Toolbar Footer */}
      <div className="border-t-2 border-gray-200 dark:border-neutral-900 px-4 py-3 bg-gray-50/50 dark:bg-neutral-950/20 flex items-center justify-between relative z-10">
        <span className="text-xs text-gray-400 dark:text-neutral-600 font-mono">
          Markdown context rendering active
        </span>

        <button
          onClick={onAnalyze}
          disabled={isLoading || !text.trim()}
          className="flex items-center space-x-2 text-xs font-semibold px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles size={14} />
              <span>Analyze Thread</span>
              <CornerDownLeft size={12} className="opacity-40" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
