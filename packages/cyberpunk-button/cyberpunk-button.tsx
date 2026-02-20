"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const PixelButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const rows = 5;
  const cols = 44;

  const pixelSize = 3;
  const gap = 2;
  const spacing = 5;

  const totalArrows = Math.floor(cols / spacing);

  // Smooth scanning animation
  useEffect(() => {
    if (!isHovered) return;

    const timer = setInterval(() => {
      setProgress((prev) => (prev + 0.5) % totalArrows);
    }, 60);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Arrow pixel logic
  const isPixelActive = (r: number, c: number) => {
    const centerRow = 2;
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

    return {
      active: isHead || isDiagonal,
      arrowIndex,
    };
  };

  return (
    <button
      className="relative flex items-center bg-neutral-950 rounded-xl p-1 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 active:scale-[0.98]"
      style={{ width: "220px", height: "64px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Text */}
      <div
        className={`absolute left-[72px] transition-all duration-300 ${
          isHovered ? "opacity-0 -translate-x-2" : "opacity-100"
        }`}
      >
        <span className="text-white text-lg font-medium tracking-tight">
          Book a demo
        </span>
      </div>

      {/* Lime Animated Box */}
      <div
        className={`relative h-full flex items-center justify-center overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
          isHovered ? "w-full bg-[#ccff00]" : "w-[56px] bg-[#ccff00]"
        }`}
      >
        <div className="absolute inset-0 border border-[#b3e600] rounded-lg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

        {/* Pixel Grid */}
        <div style={{ display: "grid", gap: `${gap}px` }}>
          {Array.from({ length: rows }).map((_, r) => (
            <div key={r} style={{ display: "flex", gap: `${gap}px` }}>
              {Array.from({ length: cols }).map((_, c) => {
                const { active, arrowIndex } = isPixelActive(r, c);

                // Distance from scanning head
                const distance = progress - arrowIndex;
                const normalized =
                  distance >= 0 ? distance : totalArrows + distance;

                // Trail length (how many arrows fade behind)
                const trailLength = 4;

                let intensity = 0;

                if (normalized >= 0 && normalized <= trailLength) {
                  intensity = 1 - normalized / trailLength;
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    style={{
                      width: `${pixelSize}px`,
                      height: `${pixelSize}px`,
                      borderRadius: "1px",
                      transition: "background-color 120ms linear",
                      backgroundColor: active
                        ? `rgba(15,15,15,${0.3 + intensity * 0.7})`
                        : "rgba(15,15,15,0.06)",
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* External Arrow */}
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

export default PixelButton;

// 'use client'
// import React, { useState, useEffect } from 'react'
// import { ArrowRight } from 'lucide-react'

// const PixelButton = () => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [activeArrow, setActiveArrow] = useState(0)

//   const rows = 5
//   const cols = 44

//   const pixelSize = 3   // smaller pixels
//   const gap = 2         // tighter spacing
//   const spacing = 5     // width per arrow block

//   // Animate arrow sequence
//   useEffect(() => {
//     if (!isHovered) return

//     const totalArrows = Math.floor(cols / spacing)

//     const timer = setInterval(() => {
//       setActiveArrow(prev => (prev + 1) % totalArrows)
//     }, 120)

//     return () => clearInterval(timer)
//   }, [isHovered])

//   // Arrow pixel logic (2px thick head + wings)
//   const isPixelActive = (r: number, c: number) => {
//     const centerRow = 2
//     const rowOffset = r - centerRow
//     const diagonalShift = Math.abs(rowOffset)

//     const arrowIndex = Math.floor(c / spacing)
//     const phase = c % spacing

//     // Head (2px wide)
//     const isHead =
//       r === centerRow &&
//       (phase === spacing - 1 || phase === spacing - 2)

//     // Diagonal wings (2px thick)
//     const isDiagonal =
//       r !== centerRow &&
//       (phase === spacing - 1 - diagonalShift ||
//         phase === spacing - 2 - diagonalShift)

//     return {
//       active: isHead || isDiagonal,
//       arrowIndex,
//     }
//   }

//   return (
//     <button
//       className="relative flex items-center bg-neutral-950 rounded-xl p-1 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 active:scale-[0.98]"
//       style={{ width: '220px', height: '64px' }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Static Text */}
//       <div
//         className={`absolute left-[72px] transition-all duration-300 ${
//           isHovered ? 'opacity-0 -translate-x-2' : 'opacity-100'
//         }`}
//       >
//         <span className="text-white text-lg font-medium tracking-tight">
//           Book a demo
//         </span>
//       </div>

//       {/* Lime Animated Box */}
//       <div
//         className={`relative h-full flex items-center justify-center overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
//           isHovered ? 'w-full bg-[#ccff00]' : 'w-[56px] bg-[#ccff00]'
//         }`}
//       >
//         {/* subtle border + shine */}
//         <div className="absolute inset-0 border border-[#b3e600] rounded-lg pointer-events-none" />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

//         {/* Pixel Grid */}
//         <div
//           style={{
//             display: 'grid',
//             gap: `${gap}px`,
//           }}
//         >
//           {Array.from({ length: rows }).map((_, r) => (
//             <div
//               key={r}
//               style={{
//                 display: 'flex',
//                 gap: `${gap}px`,
//               }}
//             >
//               {Array.from({ length: cols }).map((_, c) => {
//                 const { active, arrowIndex } = isPixelActive(r, c)

//                 const isHighlighted =
//                   isHovered && arrowIndex === activeArrow

//                 return (
//                   <div
//                     key={`${r}-${c}`}
//                     style={{
//                       width: `${pixelSize}px`,
//                       height: `${pixelSize}px`,
//                       borderRadius: '1px',
//                       transition: 'background-color 150ms ease',
//                       backgroundColor: active
//                         ? isHighlighted
//                           ? 'rgba(15,15,15,1)'
//                           : 'rgba(15,15,15,0.55)'
//                         : 'rgba(15,15,15,0.06)',
//                     }}
//                   />
//                 )
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* External Arrow */}
//       <div
//         className={`absolute -right-12 transition-opacity duration-300 ${
//           isHovered ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <ArrowRight
//           className="text-neutral-400 w-5 h-5"
//           strokeWidth={1.5}
//         />
//       </div>
//     </button>
//   )
// }

// export default PixelButton
