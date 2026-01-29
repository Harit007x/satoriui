"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import clsx from "clsx";

type InstallationCommandProps = {
  component: string;
};

const getCommands = (component: string) => ({
  pnpm: `pnpm dlx shadcn@latest add  @satoriui/${component}`,
  npm: `npx shadcn@latest add  @satoriui/${component}`,
  yarn: `yarn shadcn@latest add  @satoriui/${component}`,
  bun: `bunx --bun shadcn@latest add  @satoriui/${component}`,
});

const highlightCommand = (cmd: string) => {
  const parts = cmd.split(" ");
  const packageManager = parts[0];
  const rest = parts.slice(1).join(" ");

  return (
    <code className="font-mono text-sm">
      <span className="text-primary">{packageManager}</span>
      <span className="text-emerald-600 dark:text-green-300"> {rest}</span>
    </code>
  );
};

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
    <div className="w-full mx-auto max-w-2xl">
      {/* Header */}
      <div className="">
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Installation
        </h3>
      </div>

      {/* Body */}
      <div className="bg-sidebar rounded-lg border">
        {/* Package Manager Tabs */}
        <div className="px-4 flex flex-wrap gap-4 bg-background rounded-t-lg">
          {(["pnpm", "npm", "yarn", "bun"] as PackageManager[]).map((pm) => (
            <button
              key={pm}
              onClick={() => setActivePM(pm)}
              className={`py-2 text-sm font-medium transition ${
                activePM === pm
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        {/* Command Box */}
        <div className="relative flex items-center gap-3 rounded-lg px-4 py-3 text-foreground">
          <Terminal className="h-4 w-4 shrink-0 text-foreground" />

          {/* Scrollable command on mobile */}
          <code className="flex-1 overflow-x-auto whitespace-nowrap text-sm">
            {highlightCommand(command)}
          </code>

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className={clsx(
              "rounded-md p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white",
              copied && "!bg-blueBackground",
            )}
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
