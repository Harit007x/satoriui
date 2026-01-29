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
        <button className="px-4 py-2 text-white rounded-lg font-medium text-sm shadow-lg bg-primary hover:bg-sky-500 hover:scale-105 transition-transform duration-200">
          Get Started
        </button>
      ),
    },
    {
      name: "Toggle Switch",
      category: "Form",
      code: `<Toggle checked={true} />`,
      preview: (
        <div className="w-11 h-6 bg-primary rounded-full p-0.5 cursor-pointer">
          <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 transition-transform" />
        </div>
      ),
    },
    {
      name: "Avatar Stack",
      category: "Display",
      code: `<AvatarStack users={[]} />`,
      preview: (
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-300 to-sky-400 ring-2 ring-white" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 ring-2 ring-white" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 ring-2 ring-white" />
          <div className="w-8 h-8 rounded-full bg-slate-100 ring-2 ring-white flex items-center justify-center text-[10px] font-medium text-slate-500">
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
            className="group bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-200/50 flex items-center justify-between bg-slate-50/30">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {component.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-sm font-semibold text-slate-900">
                  {component.name}
                </span>
              </div>
              <button
                onClick={() => handleCopy(index, component.code)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {copiedIndex === index ? (
                  <>
                    <Icons.check className="h-3 w-3 text-primary" />
                    <span className="text-primary">Copied!</span>
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
              <div className="flex-1 p-6 flex items-center justify-center bg-gradient-to-br from-white to-slate-50/20">
                {component.preview}
              </div>

              {/* Code */}
              <div className="w-40 p-4 bg-slate-900/[0.03] border-l border-slate-200/50 flex items-center">
                <code className="text-xs font-mono text-slate-500">
                  {component.code}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 top-8 bg-slate-900 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden lg:flex">
        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">
          <Icons.sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-xs font-semibold">50+ Components</span>
          <span className="text-[10px] text-slate-400">Ready to use</span>
        </div>
      </div>
    </div>
  );
};

export default Showcase01;
