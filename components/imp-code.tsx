// // greeen blackhole -------------------------------------------------

// "use client";

// import { useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     UnicornStudio?: {
//       isInitialized: boolean;
//       init: () => void;
//     };
//   }
// }

// // Configuration
// const UNICORN_STUDIO_CONFIG = {
//   scriptUrl: "/unicornStudio.umd.js",
//   projectId: "HzcaAbRLaALMhHJp8gLY", // New project ID
//   backgroundColor: "#000000",
//   overlayColor: "#50C878", // Emerald green
//   initDelay: 100,
// } as const;

// interface AuraBackgroundProps {
//   overlayColor?: string;
//   backgroundColor?: string;
//   projectId?: string;
// }

// const AuraBackground = ({
//   overlayColor = UNICORN_STUDIO_CONFIG.overlayColor,
//   backgroundColor = UNICORN_STUDIO_CONFIG.backgroundColor,
//   projectId = UNICORN_STUDIO_CONFIG.projectId,
// }: AuraBackgroundProps) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scriptLoadedRef = useRef(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;
//     if (scriptLoadedRef.current) return;

//     const cleanup = () => {
//       const existingScript = document.querySelector('script[src="/unicornStudio.umd.js"]');
//       if (existingScript) {
//         existingScript.remove();
//       }

//       if (window.UnicornStudio) {
//         window.UnicornStudio.isInitialized = false;
//       }
//       scriptLoadedRef.current = false;
//     };

//     const loadScript = () => {
//       return new Promise((resolve, reject) => {
//         if (window.UnicornStudio?.isInitialized) {
//           resolve(true);
//           return;
//         }

//         const script = document.createElement("script");
//         script.src = UNICORN_STUDIO_CONFIG.scriptUrl;
//         script.async = true;
//         script.defer = true;

//         script.onload = () => {
//           setTimeout(() => {
//             if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
//               try {
//                 window.UnicornStudio.init();
//                 window.UnicornStudio.isInitialized = true;
//                 scriptLoadedRef.current = true;
//                 console.log("✅ UnicornStudio initialized successfully");
//                 resolve(true);
//               } catch (error) {
//                 console.error("❌ Error initializing UnicornStudio:", error);
//                 reject(error);
//               }
//             }
//           }, UNICORN_STUDIO_CONFIG.initDelay);
//         };

//         script.onerror = (error) => {
//           console.error("❌ Failed to load UnicornStudio:", error);
//           reject(error);
//         };

//         document.head.appendChild(script);
//       });
//     };

//     const timer = setTimeout(() => {
//       cleanup();
//       loadScript().catch((error) => {
//         console.error("Failed to initialize UnicornStudio:", error);
//       });
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       cleanup();
//     };
//   }, [isMounted]);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="fixed top-0 left-0 z-0 w-full h-full"
//       style={{
//         position: "fixed",
//         overflow: "hidden",
//         pointerEvents: "none",
//         backgroundColor: backgroundColor, // Black background
//       }}
//     >
//       {/* Emerald green overlay with color blend mode */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: overlayColor, // #50C878
//           mixBlendMode: "color",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* UnicornStudio container */}
//       <div
//         data-us-project={projectId}
//         className="absolute w-full h-full left-0 top-0"
//         style={{ zIndex: 0 }}
//       />
//     </div>
//   );
// };

// export default AuraBackground;

// // Red Cherry -------------------------------

"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const AuraBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Clean up any existing instances
    const cleanup = () => {
      // Reset UnicornStudio
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false;
      }
      const existingScript = document.querySelector(
        'script[src="/unicornStudio.umd.js"]',
      );
      if (existingScript) {
        existingScript.remove();
      }
    };

    // Load script locally with error handling
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (window.UnicornStudio?.isInitialized) {
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.src = "/unicornStudio.umd.js";
        script.async = true;
        script.defer = true;

        script.onload = () => {
          setTimeout(() => {
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
              try {
                window.UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
                console.log("UnicornStudio initialized successfully");
                resolve(true);
              } catch (error) {
                console.error("Error initializing UnicornStudio:", error);
                reject(error);
              }
            }
          }, 100);
        };

        script.onerror = (error) => {
          console.error("Failed to initialize UnicornStudio:", error);
          reject(error);
        };

        document.head.appendChild(script);
      });
    };

    // Add a small delay before loading to ensure DOM is ready
    const timer = setTimeout(() => {
      cleanup();
      loadScript().catch((error) => {
        console.error("Failed to initialize UnicornStudio:", error);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [isMounted]);

  // Don't render anything on server
  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="aura-background-component fixed top-0 left-0 z-0 w-full h-full"
      style={{
        position: "fixed",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Red overlay with blend mode */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 89, 255, 0.5)",
          mixBlendMode: "color",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* UnicornStudio container */}
      <div
        data-us-project="tPmIIl0vKqHO9yqmtge2"
        className="absolute w-full h-full left-0 top-0"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default AuraBackground;

// export default AuraBackground;

// // clover block : ----------------------

// "use client";

// import { useEffect, useState } from "react";

// declare global {
//   interface Window {
//     UnicornStudio?: {
//       isInitialized: boolean;
//       init: () => void;
//     };
//   }
// }

// interface UnicornLayoutProps {
//   children: React.ReactNode;
//   projectId?: string;
//   backgroundColor?: string;
// }

// const UnicornLayout = ({
//   children,
//   projectId = "PbfL8YshrLU8GjeTZ4HP",
//   backgroundColor = "#000000",
// }: UnicornLayoutProps) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     // Apply global styles
//     document.documentElement.style.margin = "0";
//     document.documentElement.style.padding = "0";
//     document.documentElement.style.width = "100%";
//     document.documentElement.style.height = "100%";

//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//     document.body.style.width = "100%";
//     document.body.style.height = "100%";
//     document.body.style.overflow = "hidden";
//     document.body.style.backgroundColor = backgroundColor;

//     return () => {
//       document.documentElement.style.margin = "";
//       document.documentElement.style.padding = "";
//       document.documentElement.style.width = "";
//       document.documentElement.style.height = "";

//       document.body.style.margin = "";
//       document.body.style.padding = "";
//       document.body.style.width = "";
//       document.body.style.height = "";
//       document.body.style.overflow = "";
//       document.body.style.backgroundColor = "";
//     };
//   }, [backgroundColor]);

//   useEffect(() => {
//     if (!isMounted) return;

//     const cleanup = () => {
//       const existingScript = document.querySelector('script[src="/unicornStudio.umd.js"]');
//       if (existingScript) {
//         existingScript.remove();
//       }
//       if (window.UnicornStudio) {
//         window.UnicornStudio.isInitialized = false;
//       }
//     };

//     const loadScript = () => {
//       return new Promise((resolve, reject) => {
//         if (window.UnicornStudio?.isInitialized) {
//           setIsInitialized(true);
//           resolve(true);
//           return;
//         }

//         const script = document.createElement("script");
//         script.src = "/unicornStudio.umd.js";
//         script.async = true;
//         script.defer = true;

//         script.onload = () => {
//           setTimeout(() => {
//             if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
//               try {
//                 window.UnicornStudio.init();
//                 window.UnicornStudio.isInitialized = true;
//                 setIsInitialized(true);
//                 console.log("✅ UnicornStudio v2 initialized");
//                 resolve(true);
//               } catch (error) {
//                 console.error("❌ Error initializing UnicornStudio:", error);
//                 reject(error);
//               }
//             }
//           }, 100);
//         };

//         script.onerror = (error) => {
//           console.error("❌ Failed to load UnicornStudio:", error);
//           reject(error);
//         };

//         document.head.appendChild(script);
//       });
//     };

//     const timer = setTimeout(() => {
//       cleanup();
//       loadScript().catch((error) => {
//         console.error("Failed to initialize UnicornStudio:", error);
//       });
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       cleanup();
//     };
//   }, [isMounted]);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background layer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//         }}
//       >
//         <div
//           data-us-project={projectId}
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </div>

//       {/* Content layer */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           width: "100%",
//           height: "100%",
//           overflow: "auto", // Allows scrolling for content if needed
//         }}
//       >
//         {children}
//       </div>

//       {/* Loading indicator */}
//       {!isInitialized && (
//         <div
//           style={{
//             position: "absolute",
//             bottom: 20,
//             right: 20,
//             color: "rgba(255,255,255,0.5)",
//             fontSize: "12px",
//             zIndex: 20,
//           }}
//         >
//           Loading background...
//         </div>
//       )}
//     </div>
//   );
// };

// export default UnicornLayout;

// // horizontal lightrays -------------------------------

// "use client";

// import { useEffect, useState } from "react";

// interface UnicornBackgroundProps {
//   projectId?: string;
//   overlayColor?: string;
//   overlayOpacity?: number;
//   className?: string;
// }

// const UnicornBackground = ({
//   projectId = "p7Ff6pfTrb5Gs59C7nLC",
//   overlayColor,
//   overlayOpacity = 0.5,
//   className = "",
// }: UnicornBackgroundProps) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     const cleanup = () => {
//       const existingScript = document.querySelector('script[src="/unicornStudio.umd.js"]');
//       if (existingScript) {
//         existingScript.remove();
//       }
//       if (window.UnicornStudio) {
//         window.UnicornStudio.isInitialized = false;
//       }
//     };

//     const loadScript = () => {
//       return new Promise((resolve, reject) => {
//         if (window.UnicornStudio?.isInitialized) {
//           resolve(true);
//           return;
//         }

//         const script = document.createElement("script");
//         script.src = "/unicornStudio.umd.js";
//         script.async = true;
//         script.defer = true;

//         script.onload = () => {
//           setTimeout(() => {
//             if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
//               try {
//                 window.UnicornStudio.init();
//                 window.UnicornStudio.isInitialized = true;
//                 console.log("UnicornStudio initialized successfully");
//                 resolve(true);
//               } catch (error) {
//                 console.error("Error initializing UnicornStudio:", error);
//                 reject(error);
//               }
//             }
//           }, 100);
//         };

//         script.onerror = (error) => {
//           console.error("Failed to load UnicornStudio:", error);
//           reject(error);
//         };

//         document.head.appendChild(script);
//       });
//     };

//     const timer = setTimeout(() => {
//       cleanup();
//       loadScript().catch((error) => {
//         console.error("Failed to initialize UnicornStudio:", error);
//       });
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       cleanup();
//     };
//   }, [isMounted]);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className={`absolute inset-0 z-0 ${className}`}>
//       {/* UnicornStudio container */}
//       <div data-us-project={projectId} className="absolute inset-0" />

//       {/* Optional overlay */}
//       {overlayColor && (
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundColor: overlayColor,
//             opacity: overlayOpacity,
//             mixBlendMode: "color",
//             pointerEvents: "none",
//             zIndex: 1,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default UnicornBackground;
