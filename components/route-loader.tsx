"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface RouteLoaderProps extends React.ComponentProps<typeof motion.div> {
  height?: number;
  color?: string;
  position?: "top" | "bottom";
}

function RouteLoader({
  height = 4,
  color = "bg-primary",
  position = "top",
  className,
  ...props
}: RouteLoaderProps) {
  const controls = useAnimation();
  const pathname = usePathname();
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;

    // Start loader
    controls.set({ scaleX: 0, opacity: 1 });

    controls.start({
      scaleX: 0.9,
      transition: { duration: 0.4, ease: "easeOut" },
    });

    // Finish loader after navigation
    const finish = setTimeout(() => {
      controls.start({
        scaleX: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      });

      setTimeout(() => {
        controls.start({ opacity: 0 });
      }, 150);
    }, 200);

    return () => clearTimeout(finish);
  }, [pathname, controls]);

  return (
    <motion.div
      data-slot="route-loader"
      className={cn(
        "fixed left-0 right-0 z-[9999] origin-left pointer-events-none",
        position === "top" ? "top-0" : "bottom-0",
        color,
        className,
      )}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={controls}
      style={{ height }}
      {...props}
    />
  );
}

export { RouteLoader };
