"use client";
import { ComponentShowcase } from "@/components/component-showcase";
import InstallationCommand from "@/components/command-section";
import SecurityCard from "@/packages/security-card/security-card";

export default function Page() {
  return (
    <div className="space-y-12">
      <ComponentShowcase
        title="Security Card"
        description="A sleek security card component with 3D shield visualization."
        preview={<SecurityCard />}
        scale={0.8}
        tsxCode={`"use client";
export default function SecurityCard() {
  return (
    <div className="bg-white flex items-center justify-center select-none">
      {/* Card Container */}
      <div className="relative w-full max-w-[360px] bg-[#F7F9FF] rounded-lg border border-blue-100/80 shadow-[0_24px_48px_-12px_rgba(37,99,235,0.1)] overflow-hidden">
        {/* Grid Background Area */}
        <div
          className="absolute inset-0 h-[70%] z-0 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        >
          {/* Grid Lines Layer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: \`
                linear-gradient(to right, rgba(200,214,255,0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(200,214,255,0.4) 1px, transparent 1px)
              \`,
              backgroundSize: "36px 36px",
            }}
          />

          {/* Hatched Cells */}
          {[
            "top-0 right-0 w-[144px] h-[36px]",
            "top-[36px] right-0 w-[72px] h-[36px]",
            "top-[36px] right-[108px] w-[36px] h-[36px]",
            "top-0 left-[36px] w-[36px] h-[36px]",
            "top-[108px] left-0 w-[36px] h-[36px]",
            "top-[72px] right-[36px] w-[36px] h-[36px]",
            "top-[144px] right-0 w-[36px] h-[36px]",
          ].map((positionClasses, index) => (
            <div
              key={index}
              className={\`absolute \${positionClasses}\`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(37, 99, 235, 0.08) 0, rgba(37, 99, 235, 0.08) 1px, transparent 0, transparent 6px)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-16 pb-10 px-8 h-full">
          {/* 3D Shield Icon Construction */}
          <div className="relative w-36 h-36 flex items-center justify-center mb-10">
            {/* Soft Glow Behind */}
            <div className="absolute w-24 h-24 bg-blue-500 rounded-full blur-[50px] opacity-20 translate-y-2"></div>

            {/* Back Layer (Rim/Depth) - Lighter Blue */}
            <svg
              viewBox="0 0 24 24"
              className="absolute w-full h-full text-blue-200 fill-blue-100 drop-shadow-sm transform scale-105 translate-y-1"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor"
                strokeWidth="0"
              />
            </svg>

            {/* Front Layer (Main Face) - Vibrant Blue Gradient */}
            <svg
              viewBox="0 0 24 24"
              className="absolute w-[82%] h-[82%] drop-shadow-xl"
            >
              <defs>
                <linearGradient
                  id="shieldGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#1D4ED8", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              {/* Inner Stroke for bevel effect */}
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                fill="url(#shieldGradient)"
                stroke="#60A5FA"
                strokeWidth="0.5"
              />
            </svg>

            {/* Top Highlight for 3D glossy feel */}
            <svg
              viewBox="0 0 24 24"
              className="absolute w-[82%] h-[82%] opacity-40 pointer-events-none"
            >
              <path d="M12 5l-8-3-8 3v4c0 0 2-1 8-1s8 1 8 1V5z" fill="white" />
            </svg>
          </div>

          {/* Text Section */}
          <div className="w-full text-left mt-4">
            <h3 className="text-[#2563EB] font-semibold text-xl tracking-tight mb-3">
              Security
            </h3>
            <p className="text-gray-700 text-lg leading-[1.6] font-medium opacity-90">
              This is a placeholder sentence intended to occupy space until the
              final text is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`}
      />
      <InstallationCommand title="Installation" component={"security-card"} />
    </div>
  );
}
