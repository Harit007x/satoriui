"use client";

import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1100; // keyboard's ideal width (tweak if needed)

const KeyboardUI = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!wrapperRef.current) return;
      const availableWidth = wrapperRef.current.offsetWidth;
      const nextScale = Math.min(availableWidth / DESIGN_WIDTH, 1);
      setScale(nextScale);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full flex justify-center overflow-hidden"
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <div className="w-full flex flex-col gap-2 md:gap-3 select-none">
          {/* Row 1 */}
          <div className="flex w-full gap-2 md:gap-3 h-12 md:h-16">
            {[
              "`",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "-",
              "=",
            ].map((k) => (
              <div
                key={k}
                className="flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center text-neutral-900 text-xl font-normal hover:bg-neutral-50 transition-colors cursor-default"
              >
                {k}
              </div>
            ))}
            <div className="flex-[1.6] bg-neutral-200/80 rounded-lg flex items-center justify-end pr-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default">
              delete
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full gap-2 md:gap-3 h-12 md:h-16">
            <div className="flex-[1.6] bg-neutral-200/80 rounded-lg flex items-center justify-start pl-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default">
              tab
            </div>
            {[
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "[",
              "]",
              "\\",
            ].map((k) => (
              <div
                key={k}
                className="flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center text-neutral-900 text-xl font-normal hover:bg-neutral-50 transition-colors cursor-default"
              >
                {k}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex w-full gap-2 md:gap-3 h-12 md:h-16">
            <div className="flex-[1.9] bg-neutral-200/80 rounded-lg flex items-center justify-start pl-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default">
              caps
            </div>
            {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map(
              (k) => (
                <div
                  key={k}
                  className="flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center text-neutral-900 text-xl font-normal hover:bg-neutral-50 transition-colors cursor-default"
                >
                  {k}
                </div>
              )
            )}
            <div className="flex-[2.3] bg-[#f05a2d] rounded-lg flex items-end justify-end pr-4 pb-3 text-neutral-900 text-lg font-normal relative hover:bg-[#e05025] transition-colors cursor-default">
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-90" />
              return
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex w-full gap-2 md:gap-3 h-12 md:h-16">
            <div className="flex-[2.5] bg-neutral-200/80 rounded-lg flex items-center justify-start pl-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default">
              shift
            </div>
            {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => (
              <div
                key={k}
                className="flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center text-neutral-900 text-xl font-normal hover:bg-neutral-50 transition-colors cursor-default"
              >
                {k}
              </div>
            ))}
            <div className="flex-[2.5] bg-neutral-200/80 rounded-lg flex items-center justify-end pr-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default">
              shift
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex w-full gap-2 md:gap-3 h-12 md:h-16">
            {["ctrl", "opt", "hpOS"].map((k) => (
              <div
                key={k}
                className="flex-[1.25] bg-neutral-200/80 rounded-lg flex items-center justify-start pl-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default"
              >
                {k}
              </div>
            ))}
            <div className="flex-[6.5] bg-white rounded-lg shadow-sm hover:bg-neutral-50 transition-colors cursor-default" />
            {["hpOS", "opt", "ctrl"].map((k) => (
              <div
                key={k}
                className="flex-[1.25] bg-neutral-200/80 rounded-lg flex items-center justify-start pl-4 text-neutral-900 text-lg font-normal hover:bg-neutral-300/80 transition-colors cursor-default"
              >
                {k}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardUI;
