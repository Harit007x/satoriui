// card.tsx
import * as React from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-gray-200 bg-white shadow-sm",
        "dark:border-white/10 dark:bg-[#1a1a1a]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
