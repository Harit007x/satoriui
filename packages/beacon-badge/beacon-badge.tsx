"use client";
import { motion } from "motion/react";
import BlurReveal from "../blur-reveal/blur-reveal";

export type BeaconColor =
  | "green"
  | "blue"
  | "purple"
  | "yellow"
  | "pink"
  | "orange"
  | "red"
  | "white"
  | "black";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";
export type BorderSize = "sm" | "md" | "lg" | "xl" | "full";

export interface BeaconBadgeProps {
  label?: string;
  className?: string;
  beconColor?: BeaconColor;
  beconPulses?: boolean;
  speedReveal?: number;
  revealDirection?: RevealDirection;
  staticTheme?: "dark" | "light";
  border?: BorderSize;
}

const colorMap: Record<BeaconColor, string> = {
  green: "bg-emerald-500 dark:bg-emerald-400",
  blue: "bg-sky-500 dark:bg-sky-400",
  purple: "bg-purple-500 dark:bg-purple-400",
  yellow: "bg-yellow-500 dark:bg-yellow-400",
  pink: "bg-pink-500 dark:bg-pink-400",
  orange: "bg-orange-500 dark:bg-orange-400",
  red: "bg-red-500 dark:bg-red-400",
  white: "bg-zinc-200 dark:bg-white",
  black: "bg-black dark:bg-zinc-800",
};

const borderMap: Record<BorderSize, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const directionMap: Record<
  RevealDirection,
  { initial: { x: number; y: number }; animate: { x: number; y: number } }
> = {
  up: { initial: { x: 0, y: 20 }, animate: { x: 0, y: 0 } },
  down: { initial: { x: 0, y: -20 }, animate: { x: 0, y: 0 } },
  left: { initial: { x: 20, y: 0 }, animate: { x: 0, y: 0 } },
  right: { initial: { x: -20, y: 0 }, animate: { x: 0, y: 0 } },
  none: { initial: { x: 0, y: 0 }, animate: { x: 0, y: 0 } },
};

const BeaconBadge = ({
  label = "50+ Components Available",
  className,
  beconColor = "blue",
  beconPulses = true,
  speedReveal = 3,
  revealDirection = "up",
  staticTheme,
  border = "full",
}: BeaconBadgeProps) => {
  const colorClass = colorMap[beconColor] || colorMap.blue;
  const { initial, animate } = directionMap[revealDirection];

  const themeClasses = {
    container:
      staticTheme === "dark"
        ? "border-white/[0.08] bg-white/[0.03]"
        : staticTheme === "light"
          ? "border-black/[0.08] bg-black/[0.03]"
          : "border-black/[0.08] bg-black/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03]",
    text:
      staticTheme === "dark"
        ? "text-white/60"
        : staticTheme === "light"
          ? "text-black/60"
          : "text-black/60 dark:text-white/60",
    beacon:
      staticTheme === "dark"
        ? (colorClass.split(" ").pop() || "").replace("dark:", "")
        : staticTheme === "light"
          ? colorClass.split(" ")[0]
          : colorClass,
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, ...animate }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 border backdrop-blur-sm ${borderMap[border]} ${themeClasses.container} ${className || ""}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {beconPulses && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${themeClasses.beacon} opacity-75`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${themeClasses.beacon}`}
        />
      </span>
      <BlurReveal
        className={`text-[11px] tracking-widest uppercase font-medium ${themeClasses.text}`}
        speedReveal={speedReveal}
      >
        {label}
      </BlurReveal>
    </motion.div>
  );
};

export default BeaconBadge;
