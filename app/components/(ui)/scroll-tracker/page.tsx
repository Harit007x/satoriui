"use client";
import { ComponentShowcase } from "@/components/component-showcase";
import InstallationCommand from "@/components/command-section";
import { ScrollTracker } from "@/packages/scroll-tracker/scroll-tracker";

const ScrollTrackerPreview = () => {
  return (
    <div className="p-4 bg-accent w-full text-center rounded-md text-text">
      Scroll this page to see the scroll tracker at the top.
    </div>
  );
};

export default function Page() {
  return (
    <div className="space-y-12">
      <ScrollTracker />

      <ComponentShowcase
        title="Scroll Tracker"
        description="Track scroll progress with a visual indicator."
        preview={<ScrollTrackerPreview />}
        scale={0.9}
        tsxCode={`"use client";
import { motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollTrackerProps extends React.ComponentProps<typeof motion.div> {
  /**
   * Thickness of the progress indicator
   * @default 4
   */
  thickness?: number;
  /**
   * Tailwind color class for the tracker
   * @default "bg-primary"
   */
  trackerColor?: string;
  /**
   * Where to position the tracker
   * @default "top"
   */
  position?: "top" | "bottom";
  /**
   * Reference to scrollable element
   * If not specified, uses window
   */
  targetContainer?: React.RefObject<HTMLElement | null>;
}

function ScrollTracker({
  thickness = 4,
  trackerColor = "bg-primary",
  position = "top",
  className,
  targetContainer,
  ...rest
}: ScrollTrackerProps) {
  const { scrollYProgress } = useScroll({
    container: targetContainer as any,
  });

  const positionalClasses = cn(
    "absolute left-0 right-0 z-50 origin-left",
    !targetContainer && "fixed",
    position === "top" ? "top-0" : "bottom-0",
    trackerColor,
    className,
  );

  const inlineStyles = {
    scaleX: scrollYProgress,
    height: \`\${thickness}px\`,
  };

  return (
    <motion.div
      data-ui="scroll-tracker"
      className={positionalClasses}
      style={inlineStyles}
      {...rest}
    />
  );
}

export { ScrollTracker };
`}
      />

      <InstallationCommand title="Installation" component={"scroll-tracker"} />
    </div>
  );
}
