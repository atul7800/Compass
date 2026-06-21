import React, {useState} from "react";
import {Card, CardTitle} from "./ui/Card";
import {Copy, Check} from "lucide-react";

export default function SuggestedResponseCard({response}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-purple-200 dark:border-purple-900/40 bg-purple-50/10 dark:bg-purple-950/5">
      <div className="flex items-center justify-between mb-4">
        <CardTitle className="mb-0 text-purple-700 dark:text-purple-400">
          Suggested Response
        </CardTitle>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 text-xs font-medium border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors shadow-sm"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-500" />
              <span className="text-emerald-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="text-gray-400" />
              <span>Copy Response</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-900 rounded-xl p-4 shadow-inner">
        <pre className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200 whitespace-pre-wrap font-sans leading-relaxed">
          {response}
        </pre>
      </div>
    </Card>
  );
}
