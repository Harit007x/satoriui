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

// Configuration
const UNICORN_STUDIO_CONFIG = {
  scriptUrl: "/unicornStudio.umd.js",
  projectId: "HzcaAbRLaALMhHJp8gLY", // Green blackhole project ID
  backgroundColor: "#0B0C0E", // Vislo deep charcoal
  overlayColor: "#00E091", // Vislo neon green
  initDelay: 100,
} as const;

interface AuraBackgroundProps {
  overlayColor?: string;
  backgroundColor?: string;
  projectId?: string;
}

const AuraBackground = ({
  overlayColor = UNICORN_STUDIO_CONFIG.overlayColor,
  backgroundColor = UNICORN_STUDIO_CONFIG.backgroundColor,
  projectId = UNICORN_STUDIO_CONFIG.projectId,
}: AuraBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (scriptLoadedRef.current) return;

    const cleanup = () => {
      const existingScript = document.querySelector('script[src="/unicornStudio.umd.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false;
      }
      scriptLoadedRef.current = false;
    };

    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (window.UnicornStudio?.isInitialized) {
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.src = UNICORN_STUDIO_CONFIG.scriptUrl;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          setTimeout(() => {
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
              try {
                window.UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
                scriptLoadedRef.current = true;
                console.log("✅ UnicornStudio initialized successfully");
                resolve(true);
              } catch (error) {
                console.error("❌ Error initializing UnicornStudio:", error);
                reject(error);
              }
            }
          }, UNICORN_STUDIO_CONFIG.initDelay);
        };

        script.onerror = (error) => {
          console.error("❌ Failed to load UnicornStudio:", error);
          reject(error);
        };

        document.head.appendChild(script);
      });
    };

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

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-0 w-full h-full pointer-events-none"
      style={{
        position: "fixed",
        overflow: "hidden",
        backgroundColor: backgroundColor,
      }}
    >
      {/* Emerald/Neon green overlay with color blend mode */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          mixBlendMode: "color",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.4, // Slight transparency to let shader show nicely
        }}
      />

      {/* UnicornStudio container */}
      <div
        data-us-project={projectId}
        className="absolute w-full h-full left-0 top-0"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default AuraBackground;
