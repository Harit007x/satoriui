"use client";
import { useState } from "react";
import { Icons } from "./icons";

const Showcase02 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components = [
    {
      name: "Gradient Button",
      category: "Interactive",
      code: `<Button variant="gradient">Get Started</Button>`,
      preview: (
        <button className="px-5 py-2.5 bg-gradient-accent text-accent-foreground rounded-lg font-medium text-sm shadow-accent hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          Get Started
        </button>
      ),
    },
    {
      name: "Status Badge",
      category: "Display",
      code: `<Badge variant="success">Active</Badge>`,
      preview: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-secondary border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">Active</span>
        </div>
      ),
    },
    {
      name: "Avatar Group",
      category: "Display",
      code: `<AvatarGroup users={users} max={3} />`,
      preview: (
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 ring-2 ring-background flex items-center justify-center text-xs font-bold text-accent-foreground">
            JD
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted-foreground/40 to-muted-foreground/20 ring-2 ring-background flex items-center justify-center text-xs font-bold text-foreground">
            AK
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-foreground/80 to-foreground/60 ring-2 ring-background flex items-center justify-center text-xs font-bold text-background">
            MR
          </div>
          <div className="w-10 h-10 rounded-full ring-2 ring-background bg-accent-secondary flex items-center justify-center text-xs font-medium text-accent">
            +5
          </div>
        </div>
      ),
    },
    {
      name: "Toggle Switch",
      category: "Form",
      code: `<Switch checked={enabled} onChange={setEnabled} />`,
      preview: (
        <div className="w-12 h-7 bg-accent rounded-full p-1 cursor-pointer shadow-inner">
          <div className="w-5 h-5 bg-accent-foreground rounded-full shadow-md transform translate-x-5 transition-transform" />
        </div>
      ),
    },
  ];

  const component = components[activeIndex]!;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Accent glow background */}
      <div className="absolute -inset-8 bg-gradient-accent-glow rounded-[3rem] blur-3xl -z-10 opacity-60" />

      {/* Main showcase card */}
      <div className="bg-card rounded-2xl border border-border shadow-elevation-high overflow-hidden backdrop-blur-sm">
        {/* Header with tabs */}
        <div className="px-5 py-4 border-b border-border/50 bg-gradient-to-r from-accent-secondary/50 to-transparent">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center shadow-accent">
                <Icons.sparkles className="h-4 w-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Component Preview
                </h3>
                <p className="text-xs text-muted-foreground">
                  Click to explore
                </p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
            </div>
          </div>

          {/* Component tabs */}
          <div className="flex gap-1">
            {components.map((component, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {component.name}
              </button>
            ))}
          </div>
        </div>

        {/* Preview area */}
        <div className="p-8">
          <div className="flex items-center justify-center min-h-[120px]">
            {component.preview}
          </div>
        </div>

        {/* Code section */}
        <div className="border-t border-border/50">
          <div className="px-5 py-3 flex items-center justify-between bg-muted/30">
            <div className="flex items-center gap-2">
              <Icons.code className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {component.category}
              </span>
            </div>
            <button
              onClick={() => handleCopy(activeIndex, component.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                copiedIndex === activeIndex
                  ? "bg-accent/10 text-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {copiedIndex === activeIndex ? (
                <>
                  <Icons.check className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Icons.copy className="h-3.5 w-3.5" />
                  <span>Copy code</span>
                </>
              )}
            </button>
          </div>
          <div className="px-5 py-4 bg-foreground/[0.02]">
            <code className="text-sm font-mono text-muted-foreground">
              {component.code}
            </code>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 -bottom-4 bg-gradient-accent text-accent-foreground p-3 rounded-xl shadow-accent flex items-center gap-3 animate-float hidden lg:flex">
        <div className="w-8 h-8 rounded-full bg-accent-foreground/20 flex items-center justify-center">
          <Icons.sparkles className="h-4 w-4" />
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-xs font-semibold">50+ Components</span>
          <span className="text-[10px] opacity-80">Copy & paste ready</span>
        </div>
      </div>
    </div>
  );
};

export default Showcase02;
