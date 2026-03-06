"use client";
import { ComponentShowcase } from "@/components/component-showcase";
import InstallationSection from "@/components/installation-section";
import FluidRender from "@/packages/fluid-shader/fluid-shader";
import { ScrollTracker } from "@/packages/scroll-tracker/scroll-tracker";

export default function Page() {
  return (
    <div className="space-y-12">
      <ComponentShowcase
        title="Fluid Shader"
        description="Mesmerizing fluid like animated webgl shader."
        preview={
          <FluidRender
            color1={[0.086, 0.647, 0.996]}
            color2={[0.278, 0.651, 1.0]}
            backgroundColor={[1.0, 1.0, 1.0]}
            speed={0.6}
            complexity={0.8}
            scale={2.2}
            elevation={0}
            glossiness={53}
            className="custom-class"
          />
        }
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

      <InstallationSection title="Installation" component={"scroll-tracker"} />
    </div>
  );
}
