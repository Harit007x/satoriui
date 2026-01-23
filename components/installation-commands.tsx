"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

type InstallationCommandProps = {
  component: string;
};

const getCommands = (component: string) => ({
  pnpm: `pnpm dlx shadcn@latest add  @satoriui/${component}`,
  npm: `npx shadcn@latest add  @satoriui/${component}`,
  yarn: `yarn shadcn@latest add  @satoriui/${component}`,
  bun: `bunx --bun shadcn@latest add  @satoriui/${component}`,
});

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

export default function InstallationCommand({
  component,
}: InstallationCommandProps) {
  const COMMANDS = getCommands(component);

  const [activePM, setActivePM] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const command = COMMANDS[activePM];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full mx-auto max-w-2xl rounded-lg border border-neutral-200 bg-white">
      {/* Header */}
      <div className="border-b border-neutral-200 px-4 pt-4 text-slate-700">
        <h3 className="mb-4 text-lg font-semibold">Installation</h3>

        {/* Tabs */}
        <div className="flex gap-6 text-sm">
          <button className="border-b-2 border-black pb-2 font-medium">
            Command
          </button>
          {/* <button className="pb-2 text-neutral-500">Manual</button> */}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Package Manager Tabs */}
        <div className="mb-3 flex flex-wrap gap-2">
          {(["pnpm", "npm", "yarn", "bun"] as PackageManager[]).map((pm) => (
            <button
              key={pm}
              onClick={() => setActivePM(pm)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                activePM === pm
                  ? "bg-neutral-100 text-black"
                  : "text-neutral-500 hover:bg-neutral-100"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        {/* Command Box */}
        <div className="relative flex items-center gap-3 rounded-lg bg-neutral-950 px-4 py-3 text-neutral-100">
          <Terminal className="h-4 w-4 shrink-0 text-neutral-400" />

          {/* Scrollable command on mobile */}
          <code className="flex-1 overflow-x-auto whitespace-nowrap text-sm">
            {command}
          </code>

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            {copied ? (
              <Check className="h-4 w-4 text-blue-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
