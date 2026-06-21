import "./App.css";
import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import ThreadInput from "./components/ThreadInput";
import IntentCard from "./components/IntentCard";
import DocumentationCard from "./components/DocumentationCard";
import HistoricalTicketCard from "./components/HistoricalTicketCard";
import SuggestedResponseCard from "./components/SuggestedResponseCard";
import {LoadingState} from "./components/ui/Skeleton";
import {mockResults} from "./data/mockData";
import {Terminal} from "lucide-react";

export default function App() {
  // 1. Force the default fallback value to 'dark'
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [threadText, setThreadText] = useState("");
  const [status, setStatus] = useState("empty");

  // 2. Safely sync the layout selector class directly to the document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleAnalyze = () => {
    if (!threadText.trim()) return;
    setStatus("loading");

    // Simulating modern low-latency RAG streaming framework engine delay
    setTimeout(() => {
      setStatus("results");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-neutral-100 transition-colors duration-200 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <ThreadInput
          text={threadText}
          setText={setThreadText}
          onAnalyze={handleAnalyze}
          isLoading={status === "loading"}
          status={status}
        />

        {status === "loading" && <LoadingState />}

        {status === "results" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Notice we changed 'items-start' to 'items-stretch' (or remove items-start) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Force this column wrapper to take full height */}
              <div className="md:col-span-1 h-full">
                <IntentCard intent={mockResults.intent} />
              </div>

              {/* Right Column Stack */}
              <div className="md:col-span-2 space-y-6">
                <DocumentationCard docs={mockResults.documentation} />
                <HistoricalTicketCard tickets={mockResults.tickets} />
              </div>
            </div>

            <SuggestedResponseCard response={mockResults.suggestedResponse} />
          </div>
        )}
      </main>
    </div>
  );
}
