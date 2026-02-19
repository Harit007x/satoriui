"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CyberPunkButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [tick, setTick] = useState(0);

  // Animation loop for the pixel movement
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const rows = 5;
  const cols = 40; // Wide enough for the expanded state

  // Logic for drawing the arrows
  const isPixelActive = (r: any, c: any) => {
    const spacing = 8; // Space between arrow units
    const x = c - tick;
    const phase = ((x % spacing) + spacing) % spacing;

    // Arrow pattern
    const isHead = r === 2 && phase === 0;
    const isWingTop = r === 1 && phase === spacing - 1;
    const isWingBottom = r === 3 && phase === spacing - 1;

    return isHead || isWingTop || isWingBottom;
  };

  return (
    <button
      className="group relative flex items-center bg-neutral-950 rounded-xl p-1 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 active:scale-[0.98]"
      style={{ width: "260px", height: "64px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Text Layer */}
      <div
        className={`absolute left-[72px] flex flex-col items-start transition-all duration-300 ${
          isHovered ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
        }`}
      >
        <span className="text-white text-lg font-medium tracking-tight">
          Book a demo
        </span>
      </div>

      {/* The Unified Lime Box (Expands on Hover) */}
      <div
        className={`relative h-full flex items-center justify-center overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
          isHovered ? "w-full bg-[#ccff00]" : "w-[56px] bg-[#ccff00]"
        }`}
      >
        {/* Inner Shadow / Highlight for the Lime Box */}
        <div className="absolute inset-0 border border-[#b3e600] rounded-lg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

        {/* The Pixel Grid Grid */}
        <div
          className={`flex items-center justify-center transition-all duration-500 ${
            isHovered ? "w-full" : "w-[56px]"
          }`}
        >
          <div className="grid grid-rows-5 gap-[4px]">
            {Array.from({ length: rows }).map((_, r) => (
              <div key={`row-${r}`} className="flex gap-[4px]">
                {Array.from({ length: cols }).map((_, c) => {
                  const active = isPixelActive(r, c);
                  return (
                    <div
                      key={`px-${r}-${c}`}
                      className={`w-[4px] h-[4px] rounded-full transition-all duration-300 ${
                        active
                          ? "bg-neutral-950 scale-100"
                          : "bg-neutral-950/5 scale-75"
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* External Indicator */}
      <div
        className={`absolute -right-12 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <ArrowRight className="text-neutral-400 w-5 h-5" strokeWidth={1.5} />
      </div>
    </button>
  );
};

export default CyberPunkButton;
