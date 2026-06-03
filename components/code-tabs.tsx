"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { pythonSnippet, typescriptSnippet } from "@/lib/content";

const snippets = {
  TypeScript: typescriptSnippet,
  Python: pythonSnippet
};

type Language = keyof typeof snippets;

export function CodeTabs() {
  const [language, setLanguage] = useState<Language>("TypeScript");
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(snippets[language]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="overflow-hidden rounded bg-[#0d0d0d] text-porcelain shadow-polish ring-1 ring-porcelain/10">
      <div className="flex items-center justify-between border-b border-porcelain/5 px-3 py-2">
        <div className="flex gap-0.5">
          {(Object.keys(snippets) as Language[]).map((item) => (
            <button
              key={item}
              type="button"
              className={`focus-ring rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition ${
                language === item
                  ? "bg-porcelain text-ink"
                  : "text-porcelain/40 hover:text-porcelain"
              }`}
              onClick={() => setLanguage(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="focus-ring inline-flex items-center gap-2 rounded border border-porcelain/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-porcelain/40 transition hover:bg-porcelain/5 hover:text-porcelain"
          onClick={copyCode}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="mono-table text-[11px] leading-relaxed text-porcelain/80">
          <code>{snippets[language]}</code>
        </pre>
      </div>
    </div>
  );
}
