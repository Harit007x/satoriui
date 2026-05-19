"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type PixelColor = "lime" | "bloodred" | "sky";
type PixelShade = "white" | "black";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface CyberpunkButtonProps {
  buttonColor?: PixelColor;
  pixelColor?: PixelShade;
  buttonText?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: ButtonSize;
}

const colorMap: Record<PixelColor, string> = {
  lime: "#00b56fff",
  bloodred: "#f03030",
  sky: "#007bff",
};

const gradientMap: Record<PixelColor, string> = {
  lime: "linear-gradient(to bottom, #00b56fff, #008254ff)",
  bloodred: "linear-gradient(to bottom, #f03030, #e11d2e)",
  sky: "linear-gradient(to bottom, #007bff, #0056b3)",
};

const pixelShadeMap: Record<PixelShade, { active: string; inactive: string }> =
  {
    white: {
      active: "rgba(255,255,255,1)",
      inactive: "rgba(255,255,255,0.55)",
    },
    black: {
      active: "rgba(15,15,15,1)",
      inactive: "rgba(15,15,15,0.55)",
    },
  };

const sizeConfig = {
  xs: {
    button: "h-[32px] sm:h-[40px] lg:h-[48px] rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] p-[2px] sm:p-[2px] lg:p-[4px]",
    boxInset: "left-[2px] top-[2px] bottom-[2px] sm:left-[2px] sm:top-[2px] sm:bottom-[2px] lg:left-[4px] lg:top-[4px] lg:bottom-[4px]",
    boxWidth: "w-6 sm:w-8 lg:w-10",
    boxWidthHovered: "w-[calc(100%-4px)] sm:w-[calc(100%-4px)] lg:w-[calc(100%-8px)]",
    boxBorderRadius: "rounded-[4px] sm:rounded-[6px] lg:rounded-[8px]",
    textContainer: "pl-9 sm:pl-12 lg:pl-15 pr-3 sm:pr-4 lg:pr-5",
    text: "text-[10px] sm:text-[12px] lg:text-[14px]",
    pixelSize: "w-[1.5px] h-[1.5px] sm:w-[2px] sm:h-[2px] lg:w-[2.5px] lg:h-[2.5px]",
    gridGap: "gap-[0.5px] sm:gap-[1px] lg:gap-[1px]",
    colsHovered: 20,
    arrowCols: 5,
  },
  sm: {
    button: "h-[40px] sm:h-[48px] lg:h-[60px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] p-[4px] sm:p-[4px] lg:p-[6px]",
    boxInset: "left-[4px] top-[4px] bottom-[4px] sm:left-[4px] sm:top-[4px] sm:bottom-[4px] lg:left-[6px] lg:top-[6px] lg:bottom-[6px]",
    boxWidth: "w-8 sm:w-10 lg:w-12",
    boxWidthHovered: "w-[calc(100%-8px)] sm:w-[calc(100%-8px)] lg:w-[calc(100%-12px)]",
    boxBorderRadius: "rounded-[6px] sm:rounded-[8px] lg:rounded-[10px]",
    textContainer: "pl-12 sm:pl-15 lg:pl-18 pr-4 sm:pr-5 lg:pr-6",
    text: "text-[12px] sm:text-[14px] lg:text-[16px]",
    pixelSize: "w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] lg:w-[3px] lg:h-[3px]",
    gridGap: "gap-[1px] sm:gap-[1.5px] lg:gap-[2px]",
    colsHovered: 25,
    arrowCols: 5,
  },
  md: {
    button: "h-[48px] sm:h-[68px] lg:h-[80px] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] p-[4px] sm:p-[6px] lg:p-[6px]",
    boxInset: "left-[4px] sm:left-[6px] lg:left-[6px] top-[4px] sm:top-[6px] lg:top-[6px] bottom-[4px] sm:bottom-[6px] lg:bottom-[6px]",
    boxWidth: "w-10 sm:w-14 lg:w-16",
    boxWidthHovered: "w-[calc(100%-8px)] sm:w-[calc(100%-12px)] lg:w-[calc(100%-12px)]",
    boxBorderRadius: "rounded-[8px] sm:rounded-[12px] lg:rounded-[14px]",
    textContainer: "pl-15 sm:pl-20 lg:pl-24 pr-6 sm:pr-8 lg:pr-10",
    text: "text-[16px] sm:text-[18px] lg:text-[22px]",
    pixelSize: "w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] lg:w-[4px] lg:h-[4px]",
    gridGap: "gap-[1.5px] sm:gap-[2px] lg:gap-[2px]",
    colsHovered: 30,
    arrowCols: 5,
  },
  lg: {
    button: "h-[76px] sm:h-[92px] lg:h-[112px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-[6px] sm:p-[8px] lg:p-[8px]",
    boxInset: "left-[6px] sm:left-[8px] lg:left-[8px] top-[6px] sm:top-[8px] lg:top-[8px] bottom-[6px] sm:bottom-[8px] lg:bottom-[8px]",
    boxWidth: "w-16 sm:w-20 lg:w-24",
    boxWidthHovered: "w-[calc(100%-12px)] sm:w-[calc(100%-16px)] lg:w-[calc(100%-16px)]",
    boxBorderRadius: "rounded-[14px] sm:rounded-[18px] lg:rounded-[20px]",
    textContainer: "pl-24 sm:pl-28 lg:pl-36 pr-8 sm:pr-10 lg:pr-14",
    text: "text-[22px] sm:text-[26px] lg:text-[32px]",
    pixelSize: "w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] lg:w-[6px] lg:h-[6px]",
    gridGap: "gap-[2px] sm:gap-[3px] lg:gap-[4px]",
    colsHovered: 35,
    arrowCols: 5,
  },
};

const CyberpunkButton = ({
  buttonColor = "lime",
  pixelColor = "black",
  buttonText = "Book a demo",
  className = "",
  style = {},
  size = "sm",
}: CyberpunkButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shimmerPhase, setShimmerPhase] = useState(0);
  const [activeArrow, setActiveArrow] = useState(0);

  const s = sizeConfig[size];
  const rows = 5;
  const spacing = 5;
  const centerRow = 2;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setShimmerPhase((prev) => (prev + 1) % (spacing + 3));
    }, 110);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    if (!isHovered) return;
    const totalArrows = Math.floor(s.colsHovered / spacing);
    const timer = setInterval(() => {
      setActiveArrow((prev) => (prev + 1) % totalArrows);
    }, 120);
    return () => clearInterval(timer);
  }, [isHovered, s.colsHovered]);

  const isPixelActiveHovered = (r: number, c: number) => {
    const rowOffset = r - centerRow;
    const diagonalShift = Math.abs(rowOffset);
    const arrowIndex = Math.floor(c / spacing);
    const phase = c % spacing;

    const isHead =
      r === centerRow && (phase === spacing - 1 || phase === spacing - 2);

    const isDiagonal =
      r !== centerRow &&
      (phase === spacing - 1 - diagonalShift ||
        phase === spacing - 2 - diagonalShift);

    return { active: isHead || isDiagonal, arrowIndex };
  };

  const pixelColors = pixelShadeMap[pixelColor];

  return (
    <button
      className={cn(
        "relative flex items-center bg-[#0a0a0a] cursor-pointer transition-[border-color] duration-300 outline-none overflow-hidden border border-[#262626]",
        s.button,
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TEXT */}
      <div
        className={cn(
          "whitespace-nowrap transition-[opacity,transform] duration-300",
          s.textContainer,
          isHovered ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"
        )}
      >
        <span
          className={cn(
            "text-white font-medium tracking-[-0.02em] font-sans",
            s.text
          )}
        >
          {buttonText}
        </span>
      </div>

      {/* COLORED BOX */}
      <div
        className={cn(
          "absolute transition-[width,left,right,top,bottom] duration-500 ease-[cubic-bezier(0.2,0,0,1)] flex items-center justify-center overflow-hidden",
          s.boxInset,
          s.boxBorderRadius,
          isHovered ? s.boxWidthHovered : s.boxWidth
        )}
        style={{
          backgroundColor: colorMap[buttonColor],
          backgroundImage: isHovered ? gradientMap[buttonColor] : "none",
        }}
      >
        {isHovered ? (
          <div className={cn("grid", s.gridGap)}>
            {Array.from({ length: rows }).map((_, r) => (
              <div key={r} className="flex gap-[inherit]">
                {Array.from({ length: s.colsHovered }).map((_, c) => {
                  const { active, arrowIndex } = isPixelActiveHovered(r, c);
                  const isHighlighted = arrowIndex === activeArrow;
                  return (
                    <div
                      key={`${r}-${c}`}
                      className={cn(
                        "rounded-[1px] shrink-0",
                        s.pixelSize,
                      )}
                      style={{
                        backgroundColor: active
                          ? isHighlighted
                            ? pixelColors.active
                            : pixelColors.inactive
                          : "transparent",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className={cn("grid", s.gridGap)}>
            {Array.from({ length: rows }).map((_, r) => (
              <div key={r} className="flex gap-[inherit]">
                {Array.from({ length: s.arrowCols }).map((_, c) => {
                  const { active } = isPixelActiveHovered(r, c);
                  const shimCol = shimmerPhase % spacing;
                  const phase = c % spacing;
                  const isShimmering = active && phase === shimCol;

                  return (
                    <div
                      key={`${r}-${c}`}
                      className={cn(
                        "rounded-[1px] shrink-0",
                        s.pixelSize,
                      )}
                      style={{
                        backgroundColor: active
                          ? isShimmering
                            ? pixelColors.active
                            : pixelColors.inactive
                          : "transparent",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default CyberpunkButton;
