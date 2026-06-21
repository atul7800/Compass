import React from "react";
import {Card, CardTitle} from "./ui/Card";
import {Tag, Search} from "lucide-react";

export default function IntentCard({intent}) {
  return (
    // Explicitly force the card component to fill 100% of the stretched parent height
    <Card className="h-full">
      <CardTitle>Intent Analysis</CardTitle>

      <div className="space-y-4">
        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 block mb-1">
            Primary Intent
          </span>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {intent.primaryIntent}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 block mb-2">
            Detected Topics
          </span>
          <div className="flex flex-wrap gap-1.5">
            {intent.topics.map((topic, i) => (
              <span
                key={i}
                className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800"
              >
                <Tag size={10} className="opacity-60" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 block mb-2">
            Generated Engine Queries
          </span>
          <div className="space-y-1.5">
            {intent.queries.map((query, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-xs font-mono bg-gray-50 text-gray-600 dark:bg-neutral-950 dark:text-neutral-400 px-2.5 py-1.5 rounded border border-gray-100 dark:border-neutral-900"
              >
                <Search size={12} className="text-gray-400" />
                <span>{query}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
