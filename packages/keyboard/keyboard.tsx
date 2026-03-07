"use client";

import React, { useState, useEffect } from "react";

interface KeyboardUIProps {
  keyAnimationToggle?: boolean;
  animatedString?: string;
}

const KeyboardUI = ({
  keyAnimationToggle = false,
  animatedString = "SATORI UI",
}: KeyboardUIProps) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    if (!keyAnimationToggle || !animatedString) return;

    let isMounted = true;
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (!isMounted) return;

      if (currentIndex >= animatedString.length) {
        currentIndex = 0;
        timeoutId = setTimeout(typeNextChar, 2000); // 2 second pause before looping
        return;
      }

      const char = animatedString[currentIndex].toUpperCase();
      const mappedChar = char === " " ? "SPACE" : char;

      setActiveKey(mappedChar);

      setTimeout(() => {
        if (isMounted) setActiveKey(null);
      }, 100);

      currentIndex++;
      timeoutId = setTimeout(typeNextChar, 250); // Typing speed
    };

    timeoutId = setTimeout(typeNextChar, 1000); // Initial delay

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [keyAnimationToggle, animatedString]);

  const getKeyClass = (keyTrigger: string, baseClass: string) => {
    const isActive = activeKey === keyTrigger;
    return `${baseClass} transition-all duration-100 ${
      isActive 
        ? "translate-y-[2px] scale-[0.98] brightness-90 shadow-none dark:brightness-125" 
        : "transform-none"
    }`;
  };

  return (
    <div className="w-[800px] max-w-4xl mx-auto px-2 sm:px-4">
      <div className="w-full flex flex-col gap-1 sm:gap-2 md:gap-3 select-none">
        <div className="flex w-full gap-0.5 sm:gap-1 md:gap-2 h-8 sm:h-10 md:h-12">
          {[
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
          ].map((k) => (
            <div
              key={k}
              className={getKeyClass(k, "flex-1 bg-white dark:bg-neutral-800 rounded sm:rounded-md md:rounded-lg shadow-sm dark:shadow-neutral-900/50 flex items-center justify-center text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-xl font-normal hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default min-w-0")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
          <div className={getKeyClass("DEL", "flex-[1.6] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-end pr-1 sm:pr-2 md:pr-4 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}>
            <span className="truncate">del</span>
          </div>
        </div>

        <div className="flex w-full gap-0.5 sm:gap-1 md:gap-2 h-8 sm:h-10 md:h-12">
          <div className={getKeyClass("TAB", "flex-[1.6] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-start pl-1 sm:pl-2 md:pl-4 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}>
            <span className="truncate">tab</span>
          </div>
          {[
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
          ].map((k) => (
            <div
              key={k}
              className={getKeyClass(k, "flex-1 bg-white dark:bg-neutral-800 rounded sm:rounded-md md:rounded-lg shadow-sm dark:shadow-neutral-900/50 flex items-center justify-center text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-xl font-normal hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default min-w-0")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
        </div>

        <div className="flex w-full gap-0.5 sm:gap-1 md:gap-2 h-8 sm:h-10 md:h-12">
          <div className={getKeyClass("CAPS", "flex-[1.9] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-start pl-1 sm:pl-2 md:pl-4 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}>
            <span className="truncate">caps</span>
          </div>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map((k) => (
            <div
              key={k}
              className={getKeyClass(k, "flex-1 bg-white dark:bg-neutral-800 rounded sm:rounded-md md:rounded-lg shadow-sm dark:shadow-neutral-900/50 flex items-center justify-center text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-xl font-normal hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default min-w-0")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
          <div className={getKeyClass("RETURN", "flex-[2.3] bg-[#348feb] dark:bg-[#1e5a8c] rounded sm:rounded-md md:rounded-lg flex items-end justify-end pr-1 sm:pr-2 md:pr-4 pb-1 sm:pb-2 md:pb-3 text-neutral-900 text-xs sm:text-sm md:text-lg font-normal relative hover:bg-[#2682de] dark:hover:bg-[#164466] transition-colors cursor-default")}>
            <div className="absolute top-1 right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-90" />
            <span className="truncate text-white dark:text-neutral-100">
              return
            </span>
          </div>
        </div>

        <div className="flex w-full gap-0.5 sm:gap-1 md:gap-2 h-8 sm:h-10 md:h-12">
          <div className={getKeyClass("SHIFT_L", "flex-[2.5] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-start pl-1 sm:pl-2 md:pl-4 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}>
            <span className="truncate">shift</span>
          </div>
          {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => (
            <div
              key={k}
              className={getKeyClass(k, "flex-1 bg-white dark:bg-neutral-800 rounded sm:rounded-md md:rounded-lg shadow-sm dark:shadow-neutral-900/50 flex items-center justify-center text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-xl font-normal hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default min-w-0")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
          <div className={getKeyClass("SHIFT_R", "flex-[2.5] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-end pr-1 sm:pr-2 md:pr-4 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}>
            <span className="truncate">shift</span>
          </div>
        </div>

        <div className="flex w-full gap-0.5 sm:gap-1 md:gap-2 h-8 sm:h-10 md:h-12">
          {["ctrl", "opt", "hpOS"].map((k) => (
            <div
              key={k}
              className={getKeyClass(k.toUpperCase() + "_L", "flex-[1.25] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-start pl-1 sm:pl-2 md:pl-4 pr-2 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
          <div className={getKeyClass("SPACE", "flex-[6.5] bg-white dark:bg-neutral-800 rounded sm:rounded-md md:rounded-lg shadow-sm dark:shadow-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default")} />
          {["hpOS", "opt", "ctrl"].map((k) => (
            <div
              key={k}
              className={getKeyClass(k.toUpperCase() + "_R", "flex-[1.25] bg-neutral-200/80 dark:bg-neutral-700/80 rounded sm:rounded-md md:rounded-lg flex items-center justify-start pl-1 sm:pl-2 md:pl-4 pr-2 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm md:text-lg font-normal hover:bg-neutral-300/80 dark:hover:bg-neutral-600/80 transition-colors cursor-default")}
            >
              <span className="truncate">{k}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyboardUI;
