"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

type CodeBlockProps = {
  title: string;
  code: string;
  expandedHeight?: number;
};

export function CodeBlock({
  title,
  code,
  expandedHeight = 300,
}: CodeBlockProps) {
  const [open, setOpen] = useState(false);
  const lines = code.trimEnd().split("\n");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="relative rounded-b-md border border-t-0 bg-accent text-accent-foreground overflow-hidden">
      {/* Copy button */}

      <div className="flex items-center justify-between px-4 py-2 border-b bg-accent">
        <span className="text-xs font-medium text-muted-foreground">
          {title}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:text-foreground transition"
        >
          {copied ? (
            <Check className="h-4 w-4 text-blue-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Code container */}
      <div
        className={`
          relative transition-[max-height] duration-300 ease-in-out
          ${open ? "overflow-auto no-scrollbar" : "overflow-hidden"}
        `}
        style={{
          maxHeight: open ? expandedHeight : 96, // ~3 lines
        }}
      >
        <pre className="flex text-sm leading-6">
          {/* Line numbers */}
          <div className="select-none text-right px-3 py-4 text-muted-foreground">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code */}
          <code className="px-2 py-4 whitespace-pre text-foreground">
            {lines.join("\n")}
          </code>
        </pre>

        {/* Fade overlay when collapsed */}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-accent via-accent/70 to-transparent" />
        )}
      </div>

      {/* View Code button */}
      {!open && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Button
            onClick={() => setOpen(true)}
            variant={"outline"}
            size={"xs"}
            className="font-semibold text-slate-600"
          >
            View Code
          </Button>
        </div>
      )}
    </div>
  );
}
