"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type PixelColor = "emerald" | "sky" | "rose";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ProButtonProps {
  text?: string;
  className?: string;
  pixelColor?: PixelColor;
  size?: ButtonSize;
  onClick?: () => void;
}

interface BoxProps {
  pixelColor: PixelColor;
  size: ButtonSize;
}

const colorMap: Record<PixelColor, string> = {
  rose: "bg-gradient-to-b from-[#f03030] to-[#e11d2e]",
  sky: "bg-gradient-to-b from-[#007bff] to-blue-600",
  emerald: "bg-gradient-to-b from-emerald-600 to-emerald-700",
};

const sizeConfig = {
  xs: {
    button:
      "rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] py-0.5 sm:py-0.5 lg:py-1 pl-0.5 sm:pl-0.5 lg:pl-1 pr-3 sm:pr-4 lg:pr-5 gap-1.5 sm:gap-2 lg:gap-3",
    text: "text-[10px] sm:text-[12px] lg:text-[14px]",
    box: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-[4px] sm:rounded-[6px] lg:rounded-[8px]",
    pixel: "w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] lg:w-[3px] lg:h-[3px]",
    gridGap: "gap-[1px] sm:gap-[1px] lg:gap-[2px]",
    shadow:
      "shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_8px_10px_-5px_rgba(0,0,0,0.1),0_4px_4px_-5px_rgba(0,0,0,0.04)]",
    boxShadow:
      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.35)]",
  },
  sm: {
    button:
      "rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] py-1 sm:py-1 lg:py-1.5 pl-1 sm:pl-1 lg:pl-1.5 pr-4 sm:pr-5 lg:pr-6 gap-2 sm:gap-3 lg:gap-4",
    text: "text-[12px] sm:text-[14px] lg:text-[16px]",
    box: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-[6px] sm:rounded-[8px] lg:rounded-[10px]",
    pixel: "w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] lg:w-[4px] lg:h-[4px]",
    gridGap: "gap-[2px] sm:gap-[2px] lg:gap-[3px]",
    shadow:
      "shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_16px_20px_-5px_rgba(0,0,0,0.1),0_8px_8px_-5px_rgba(0,0,0,0.04)]",
    boxShadow:
      "shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),0_8px_12px_rgba(0,0,0,0.35)]",
  },
  md: {
    button:
      "rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] py-1 sm:py-1.5 lg:py-1.5 pl-1 sm:pl-1.5 lg:pl-1.5 pr-6 sm:pr-8 lg:pr-10 gap-4 sm:gap-6 lg:gap-8",
    text: "text-[16px] sm:text-[18px] lg:text-[22px]",
    box: "w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[8px] sm:rounded-[12px] lg:rounded-[14px]",
    pixel: "w-[4px] h-[4px] sm:w-[4px] sm:h-[4px] lg:w-[5px] lg:h-[5px]",
    gridGap: "gap-[2px] sm:gap-[3px] lg:gap-[4px]",
    shadow:
      "shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]",
    boxShadow:
      "shadow-[inset_0_2px_2px_rgba(255,255,255,0.5),0_10px_16px_rgba(0,0,0,0.35)]",
  },
  lg: {
    button:
      "rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] py-1.5 sm:py-2 lg:py-2 pl-1.5 sm:pl-2 lg:pl-2 pr-8 sm:pr-10 lg:pr-14 gap-6 sm:gap-8 lg:gap-10",
    text: "text-[22px] sm:text-[26px] lg:text-[32px]",
    box: "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-[14px] sm:rounded-[18px] lg:rounded-[20px]",
    pixel: "w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] lg:w-[7px] lg:h-[7px]",
    gridGap: "gap-[4px] sm:gap-[5px] lg:gap-[6px]",
    shadow:
      "shadow-[inset_0_3px_6px_rgba(0,0,0,0.25),0_25px_30px_-5px_rgba(0,0,0,0.15),0_12px_12px_-5px_rgba(0,0,0,0.06)]",
    boxShadow:
      "shadow-[inset_0_3px_3px_rgba(255,255,255,0.5),0_14px_20px_rgba(0,0,0,0.4)]",
  },
};

const ProButton = ({
  text = "Pro Button",
  className,
  pixelColor = "sky",
  size = "sm",
  onClick,
}: ProButtonProps) => {
  const s = sizeConfig[size];

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex w-full sm:w-auto items-center justify-center sm:justify-start cursor-pointer shadow-sm shadow-gray-100/10",
        "bg-gradient-to-b from-[#303030] to-black",
        s.shadow,
        s.button,
        className,
      )}
    >
      <Box pixelColor={pixelColor} size={size} />
      <span className={cn("text-white font-normal tracking-[0.025em]", s.text)}>
        {text}
      </span>
    </button>
  );
};

const Box = ({ pixelColor, size }: BoxProps) => {
  const [frame, setFrame] = useState(0);
  const s = sizeConfig[size];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 9);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const getPattern = (offset: number) => {
    const pattern: boolean[][] = [];
    for (let i = 0; i < 5; i++) {
      const row: boolean[] = [];
      for (let j = 0; j < 5; j++) {
        const pos = j - offset;
        const isArrow =
          (i === 2 && pos >= 0 && pos <= 4) ||
          (i === 1 && pos === 3) ||
          (i === 0 && pos === 2) ||
          (i === 3 && pos === 3) ||
          (i === 4 && pos === 2);
        row.push(isArrow && pos >= 0 && pos <= 4);
      }
      pattern.push(row);
    }
    return pattern;
  };

  const currentPattern = getPattern(frame - 5);

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        s.boxShadow,
        s.box,
        colorMap[pixelColor],
      )}
    >
      <div className={cn("grid grid-cols-5 grid-rows-5", s.gridGap)}>
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4].map((col) => {
            const isActive = currentPattern[row][col];
            return (
              <div
                key={`${row}-${col}`}
                className={cn(
                  "transition-colors duration-150 ease-in",
                  s.pixel,
                  isActive ? "bg-white/95" : "bg-white/15",
                )}
              />
            );
          }),
        )}
      </div>
    </div>
  );
};

export default ProButton;
