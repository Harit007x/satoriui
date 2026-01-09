"use client";

import { Copy } from "lucide-react";
import React from "react";

type CodeBlockProps = {
  title: string;
  code: string;
};

export function CodeBlock({ title, code }: CodeBlockProps) {
  const lines = code.trimEnd().split("\n");

  return (
    <div className="relative overflow-auto h-[500px] rounded-bl-md rounded-br-md border bg-accent text-accent-foreground no-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-accent">
        <span className="text-xs font-medium text-muted-foreground">
          {title}
        </span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-muted-foreground hover:text-foreground transition"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      {/* Code */}
      <div className="relative overflow-auto no-scrollbar">
        <pre className="flex text-sm leading-6">
          {/* Line numbers */}
          <div className="select-none text-right px-2 py-4 text-muted-foreground">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code content */}
          <code className="px-2 py-4 whitespace-pre text-foreground">
            {lines.join("\n")}
          </code>
        </pre>
      </div>
    </div>
  );
}
