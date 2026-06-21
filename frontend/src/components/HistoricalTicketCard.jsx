import React from "react";
import {Card, CardTitle} from "./ui/Card";
import {History, User, Calendar} from "lucide-react";

export default function HistoricalTicketCard({tickets}) {
  return (
    <Card>
      <CardTitle>Historical Ticket Results</CardTitle>
      <div className="space-y-4 divide-y divide-gray-100 dark:divide-neutral-900">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="pt-4 first:pt-0 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-neutral-300 px-1.5 py-0.5 rounded">
                  {ticket.id}
                </span>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {ticket.title}
                </h4>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-100 dark:border-emerald-900/30">
                {ticket.similarity} Match
              </span>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-400 dark:text-neutral-500">
              <span className="flex items-center space-x-1">
                <User size={12} />
                <span>{ticket.customer}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar size={12} />
                <span>{ticket.date}</span>
              </span>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded p-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-neutral-600 block mb-1">
                Preview
              </span>
              <p className="text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-mono line-clamp-2">
                {ticket.preview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
