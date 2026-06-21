import React from "react";
import {Card, CardTitle} from "./ui/Card";
import {ExternalLink, BookOpen} from "lucide-react";

export default function DocumentationCard({docs}) {
  return (
    <Card>
      <CardTitle>Documentation Results ({docs.length})</CardTitle>
      <div className="divide-y divide-gray-100 dark:divide-neutral-900 space-y-4">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="pt-4 first:pt-0 flex items-start justify-between space-x-4"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-0.5 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-medium rounded border border-blue-100/50 dark:border-blue-900/30">
                  {doc.source}
                </span>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {doc.title}
                </h4>
              </div>
              <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                {doc.summary}
              </p>
            </div>

            <a
              href={doc.link}
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white border border-gray-200 dark:border-neutral-800 rounded px-2.5 py-1 bg-gray-50 dark:bg-neutral-900 transition-colors"
            >
              <span>Open</span>
              <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}
