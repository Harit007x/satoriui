"use client";
import { ComponentShowcase } from "@/components/component-showcase";
import InstallationSection from "@/components/installation-section";
import CyberPunkButton from "@/packages/cyberpunk-button/cyberpunk-button";

export default function Page() {
  return (
    <div className="space-y-12">
      <ComponentShowcase
        title="Cyberpunk Button"
        description="Neat and clean functional clock ui with buttery smooth flip animations."
        preview={<CyberPunkButton />}
        scale={0.9}
        tsxCode={`"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

type MotionWrapperProps = {
  children: React.ReactNode;
};
const MotionWrapper = ({ children }: MotionWrapperProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3,
      }}
      className="relative inline-block overflow-hidden p-[1px]"
    >
      {children}
    </motion.span>
  );
};

const DottedModern = () => {
  return (
    <div className="flex flex-col relative h-full w-full">
      <div className="absolute h-full w-full -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#212121_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto h-full flex flex-col gap-6 items-center justify-center">
        {/* Animated badge */}
        <MotionWrapper>
          <a
            href="https://github.com/ibelick/background-snippets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <span
              className="relative inline-block overflow-hidden rounded-full p-[1px] border border-slate-800 border-1"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div
                className="
                inline-flex h-full w-full cursor-pointer items-center justify-center
                rounded-full bg-white px-3 py-1 text-xs font-medium leading-5
                text-slate-700 backdrop-blur-xl
                dark:bg-black dark:text-slate-200
              "
              >
                We are open source 🚀
                <span className="inline-flex items-center pl-1 font-semibold text-black dark:text-white">
                  Github
                  <ArrowRight
                    className="pl-0.5 text-black dark:text-white"
                    size={16}
                  />
                </span>
              </div>
            </span>
          </a>
        </MotionWrapper>

        <MotionWrapper>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-slate-900">
            Action - oriented
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-600 to-slate-400">
              Modern snippets
            </span>
          </h1>
        </MotionWrapper>

        <MotionWrapper>
          <p className="text-lg text-slate-500 leading-relaxed text-center max-w-xl">
            Plug-and-play snippets-just copy, paste, and use in your next
            project. Built with Tailwind CSS and Vanilla CSS for seamless
            integration.
          </p>
        </MotionWrapper>
        <MotionWrapper>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <Link
              href="/components/button"
              className="group w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-sm font-semibold text-sm shadow-xl shadow-slate-200/50 flex items-center justify-center gap-2"
            >
              Go to Github
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]" />
            </Link>

            <button className="w-full sm:w-auto px-6 py-3 rounded-sm font-semibold text-sm text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2 bg-accent">
              <Terminal className="h-4 w-4" />
              Documentation
            </button>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default DottedModern;
`}
      />
      <InstallationSection
        title="Installation"
        component={"cyberpunk-button"}
      />
    </div>
  );
}
