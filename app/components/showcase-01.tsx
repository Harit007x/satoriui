"use client";
import { useState } from "react";
import { Icons } from "./icons";

const Showcase01 = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components = [
    {
      name: "Animated Button",
      category: "Interactive",
      code: `<Button variant="glow" />`,
      preview: (
        <button className="px-4 py-2 bg-foreground text-background rounded-lg font-medium text-sm shadow-lg hover:scale-105 transition-transform duration-200">
          Get Started
        </button>
      ),
    },
    {
      name: "Toggle Switch",
      category: "Form",
      code: `<Toggle checked={true} />`,
      preview: (
        <div className="w-11 h-6 bg-foreground rounded-full p-0.5 cursor-pointer">
          <div className="w-5 h-5 bg-background rounded-full shadow-md transform translate-x-5 transition-transform" />
        </div>
      ),
    },
    {
      name: "Avatar Stack",
      category: "Display",
      code: `<AvatarStack users={[]} />`,
      preview: (
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 ring-2 ring-background" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 ring-2 ring-background" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 ring-2 ring-background" />
          <div className="w-8 h-8 rounded-full bg-muted ring-2 ring-background flex items-center justify-center text-[10px] font-medium text-muted-foreground">
            +5
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200/40 via-slate-100/40 to-transparent rounded-[2rem] blur-xl -z-10" />

      {/* Stacked cards */}
      <div className="space-y-4">
        {components.map((component, index) => (
          <div
            key={index}
            className="group bg-card rounded-xl border border-border shadow-elevation-medium overflow-hidden transition-all duration-300 hover:shadow-elevation-high hover:-translate-y-0.5"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {component.category}
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-sm font-semibold text-foreground">
                  {component.name}
                </span>
              </div>
              <button
                onClick={() => handleCopy(index, component.code)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {copiedIndex === index ? (
                  <>
                    <Icons.check className="h-3 w-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Icons.copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Preview & Code */}
            <div className="flex">
              {/* Preview */}
              <div className="flex-1 p-6 flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
                {component.preview}
              </div>

              {/* Code */}
              <div className="w-40 p-4 bg-foreground/[0.03] border-l border-border/50 flex items-center">
                <code className="text-xs font-mono text-muted-foreground">
                  {component.code}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 top-8 bg-foreground text-background p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden lg:flex">
        <div className="w-8 h-8 rounded-full bg-foreground/80 flex items-center justify-center text-emerald-400">
          <Icons.sparkles className="h-4 w-4" />
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-xs font-semibold">50+ Components</span>
          <span className="text-[10px] text-muted-foreground">
            Ready to use
          </span>
        </div>
      </div>
    </div>
  );
};

export default Showcase01;
