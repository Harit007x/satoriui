"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Dot {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  baseOpacity: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  width: number;
  active: boolean;
}

interface RepellingGridProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  brightness?: number; // Add brightness prop (0.5 to 2.0, default 1.0)
}

const RepellingGrid: React.FC<RepellingGridProps> = ({
  children,
  className = "",
  color = "#ffffff",
  brightness = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Tuning constants ---
  const GRID_SPACING = 45;
  const DOT_RADIUS = 1.5;
  const PUSH_RADIUS = 130;
  const SPIKE_RADIUS = 130;
  const MAX_PUSH_DISTANCE = 45;
  const SPIKE_LINE_OPACITY = 0.85;
  const SPIKE_LINE_WIDTH = 2.5;

  // Brightness multiplier for dot opacity
  const BASE_DOT_OPACITY_MIN = 0.08 * brightness;
  const BASE_DOT_OPACITY_MAX = 0.13 * brightness;
  const PUSH_OPACITY_MULTIPLIER = 0.8 * brightness;
  const RIPPLE_OPACITY_MULTIPLIER = 0.6 * brightness;
  const GLOW_OPACITY_MULTIPLIER = 0.4 * brightness;

  const getRGBValues = (hexColor: string) => {
    const defaultRGB = { r: 74, g: 158, b: 255 };

    try {
      const cleanHex = hexColor.replace("#", "");

      if (cleanHex.length === 3) {
        const r = parseInt(cleanHex[0] + cleanHex[0], 16);
        const g = parseInt(cleanHex[1] + cleanHex[1], 16);
        const b = parseInt(cleanHex[2] + cleanHex[2], 16);
        return { r, g, b };
      }

      if (cleanHex.length === 6) {
        const r = parseInt(cleanHex.substring(0, 2), 16);
        const g = parseInt(cleanHex.substring(2, 4), 16);
        const b = parseInt(cleanHex.substring(4, 6), 16);
        return { r, g, b };
      }
    } catch (error) {
      console.error("Error parsing color:", error);
    }

    return defaultRGB;
  };

  const rgb = getRGBValues(color);

  const initDots = useCallback(
    (width: number, height: number) => {
      const dots: Dot[] = [];
      const cols = Math.ceil(width / GRID_SPACING) + 2;
      const rows = Math.ceil(height / GRID_SPACING) + 2;
      const offsetX = (width % GRID_SPACING) / 2;
      const offsetY = (height % GRID_SPACING) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * GRID_SPACING;
          const y = offsetY + r * GRID_SPACING;
          dots.push({
            homeX: x,
            homeY: y,
            x,
            y,
            // Use brightness-adjusted base opacity
            baseOpacity:
              BASE_DOT_OPACITY_MIN +
              Math.random() * (BASE_DOT_OPACITY_MAX - BASE_DOT_OPACITY_MIN),
          });
        }
      }
      dotsRef.current = dots;
    },
    [BASE_DOT_OPACITY_MIN, BASE_DOT_OPACITY_MAX],
  );

  const updateMousePosition = useCallback(
    (clientX: number, clientY: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    },
    [],
  );

  const handleContainerMouseMove = useCallback(
    (e: React.MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY);
    },
    [updateMousePosition],
  );

  const handleContainerMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
    mouseRef.current.x = -9999;
    mouseRef.current.y = -9999;
  }, []);

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    ripplesRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      radius: 0,
      maxRadius: Math.max(canvas.width, canvas.height) * 1.5,
      speed: 15,
      width: 120,
      active: true,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const mouse = mouseRef.current;
      const mx = mouse.x;
      const my = mouse.y;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);

      // --- Update ripples ---
      ripplesRef.current.forEach((ripple) => {
        ripple.radius += ripple.speed;
        if (ripple.radius > ripple.maxRadius) {
          ripple.active = false;
        }
      });
      ripplesRef.current = ripplesRef.current.filter((r) => r.active);

      const dots = dotsRef.current;

      type DotInfo = {
        dot: Dot;
        dist: number;
        drawX: number;
        drawY: number;
        push: number;
        rippleGlow: number;
      };

      const infos: DotInfo[] = dots.map((dot) => {
        const dx = dot.homeX - mx;
        const dy = dot.homeY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.homeX;
        let targetY = dot.homeY;
        let push = 0;

        if (dist < PUSH_RADIUS && dist > 0) {
          push = Math.pow(1 - dist / PUSH_RADIUS, 1.5);
          const pushAmount = push * MAX_PUSH_DISTANCE;
          const nx = dx / dist;
          const ny = dy / dist;
          targetX = dot.homeX + nx * pushAmount;
          targetY = dot.homeY + ny * pushAmount;
        }

        let rippleGlow = 0;
        ripplesRef.current.forEach((ripple) => {
          const rdx = dot.homeX - ripple.x;
          const rdy = dot.homeY - ripple.y;
          const rDist = Math.sqrt(rdx * rdx + rdy * rdy);

          const ringDist = Math.abs(rDist - ripple.radius);
          if (ringDist < ripple.width && rDist > 0) {
            const pushForce = Math.pow(1 - ringDist / ripple.width, 2);
            const pushAmount = pushForce * 40;
            const nx = rdx / rDist;
            const ny = rdy / rDist;
            targetX += nx * pushAmount;
            targetY += ny * pushAmount;
            rippleGlow = Math.max(
              rippleGlow,
              pushForce * RIPPLE_OPACITY_MULTIPLIER,
            );
          }
        });

        dot.x += (targetX - dot.x) * 0.15;
        dot.y += (targetY - dot.y) * 0.15;

        return { dot, dist, drawX: dot.x, drawY: dot.y, push, rippleGlow };
      });

      // --- Draw spike lines ---
      if (mouse.active) {
        ctx.lineCap = "round";
        ctx.lineWidth = SPIKE_LINE_WIDTH;

        infos.forEach(({ drawX, drawY, dist }) => {
          if (dist < SPIKE_RADIUS) {
            const alpha =
              Math.pow(1 - dist / SPIKE_RADIUS, 1.5) *
              SPIKE_LINE_OPACITY *
              brightness;
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        });
      }

      // --- Draw all dots ---
      infos.forEach(({ dot, drawX, drawY, push, rippleGlow }) => {
        // Combine all opacity factors with brightness multiplier
        const opacity = Math.min(
          1,
          dot.baseOpacity + push * PUSH_OPACITY_MULTIPLIER + rippleGlow,
        );
        const r = DOT_RADIUS + push * 1.5 + rippleGlow * 1.5;

        // Soft glow halo with brightness adjustment
        const glowAmount = Math.max(push, rippleGlow);
        if (glowAmount > 0.01) {
          const glowR = r + glowAmount * 12;
          const glow = ctx.createRadialGradient(
            drawX,
            drawY,
            0,
            drawX,
            drawY,
            glowR,
          );
          glow.addColorStop(
            0,
            `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowAmount * GLOW_OPACITY_MULTIPLIER})`,
          );
          glow.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
          ctx.beginPath();
          ctx.arc(drawX, drawY, glowR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        ctx.fill();
      });

      // --- Cursor center glow with brightness adjustment ---
      if (mouse.active) {
        const bloom = ctx.createRadialGradient(mx, my, 0, mx, my, 30);
        bloom.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.15 * brightness})`,
        );
        bloom.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        ctx.beginPath();
        ctx.arc(mx, my, 30, 0, Math.PI * 2);
        ctx.fillStyle = bloom;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 * brightness})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [
    initDots,
    rgb,
    brightness,
    PUSH_OPACITY_MULTIPLIER,
    RIPPLE_OPACITY_MULTIPLIER,
    GLOW_OPACITY_MULTIPLIER,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen bg-black overflow-hidden ${className}`}
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      onClick={handleContainerClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: "block" }}
      />
      {children && (
        <div className="relative z-10 w-full h-full overflow-y-auto pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default RepellingGrid;
