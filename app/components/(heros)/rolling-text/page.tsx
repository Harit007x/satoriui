"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  ChevronRight,
  Gauge,
  MessageSquareText,
  LucideProps,
} from "lucide-react";

// Custom Lucide icon component for the avatar placeholder
const AvatarIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);

// Rolling text component with Motion
const RollingText = () => {
  const words = [
    { text: "Manager", color: "text-blue-600" },
    { text: "Designer", color: "text-orange-500" },
    { text: "Assistant", color: "text-pink-500" },
    { text: "Organiser", color: "text-emerald-600" },
  ];

  return (
    <div className="word-pill px-6 md:px-8 rounded-full inline-flex justify-center items-center relative h-[1.1em] md:h-[1.2em] overflow-hidden align-middle -mb-1 md:-mb-2 pb-1 md:pb-2">
      <div className="scrolling-words-container text-left justify-center">
        <motion.ul
          className="scrolling-words-box w-full text-center"
          animate={{
            y: ["0%", "-20%", "-40%", "-60%", "-80%"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1],
          }}
        >
          {words.map((word, index) => (
            <li
              key={index}
              className="flex items-center justify-center h-[1.2em]"
            >
              <span className={word.color}>{word.text}</span>
            </li>
          ))}
          {/* Duplicate first for smooth loop */}
          <li className="flex items-center justify-center h-[1.2em]">
            <span className="text-blue-600">{words[0].text}</span>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

const TicketAppHero = () => {
  return (
    <div className="text-gray-900 overflow-x-hidden min-h-screen flex flex-col bg-gray-50">
      {/* Grid Lines Layout Container */}
      <div className="flex-grow w-full max-w-[1400px] mx-auto border-x border-dashed border-gray-300 relative bg-white min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="w-full py-6 px-8 flex justify-between items-center z-20">
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">
              Ticketapp
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Achievements
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Our Work
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Comparison
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              FAQs
            </a>
          </div>

          <div>
            <motion.a
              href="#"
              className="bg-[#111] text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plans and Pricing
            </motion.a>
          </div>
        </nav>

        {/* Horizontal Grid Line (Dashed) */}
        <div className="w-full border-b border-dashed border-gray-300"></div>

        {/* Hero Content */}
        <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-20 px-4 text-center relative z-10">
          {/* Announcement Badge */}
          <motion.a
            href="#"
            className="group inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 pr-4 mb-10 hover:border-gray-300 transition-all shadow-sm"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-[#1A1A1A] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              New <span className="text-xs">🎉</span>
            </span>
            <span className="text-sm text-gray-600 font-medium">
              Make your guests feel special with{" "}
              <span className="underline decoration-gray-300 underline-offset-2 text-gray-800">
                Guest Feature
              </span>
            </span>
            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-[5.5rem] leading-[1.1] font-semibold tracking-tighter text-[#111] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>A ticket system</div>
            <div className="flex flex-wrap justify-center items-center gap-x-4">
              <span>acting like an</span>
              <RollingText />
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not your average ticketing tool.{" "}
            <strong className="font-semibold text-gray-800">Ticketapp</strong>{" "}
            is a hybrid control tower for both your street sellers and digital
            wizards.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="bg-[#111] hover:bg-black text-white px-6 py-3.5 rounded-full font-medium text-base flex items-center gap-2 shadow-lg hover:shadow-xl justify-center w-full sm:w-auto"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4 text-gray-300" />
              Get an Invite
            </motion.button>

            <motion.button
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-2 py-2 pr-6 rounded-full font-medium text-base flex items-center gap-3 shadow-sm hover:shadow-md justify-center sm:justify-start w-full sm:w-auto"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100 flex items-center justify-center">
                <AvatarIcon className="w-6 h-6 text-gray-600" />
              </div>
              Get an Invite
            </motion.button>
          </motion.div>
        </main>

        {/* Horizontal Grid Line (Dashed) */}
        <div className="w-full border-t border-dashed border-gray-300"></div>

        {/* Footer Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-gray-300 bg-gray-50/30">
          {/* Feature 1 */}
          <motion.div
            className="flex items-center justify-center gap-4 py-8 px-4 group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <Gauge className="w-6 h-6 text-gray-700 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-gray-800">
              Light speed booking
            </span>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex items-center justify-center gap-4 py-8 px-4 group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <MessageSquareText className="w-6 h-6 text-gray-700 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-gray-800">
              Access to Private Portal
            </span>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex items-center justify-center gap-4 py-8 px-4 group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <Sparkles className="w-6 h-6 text-gray-700 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-gray-800">
              AI-Powered Insights
            </span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        /* Custom Rolling Animation Container */
        .scrolling-words-container {
          height: 1.2em; /* Tighter height for better vertical centering */
          overflow: hidden;
          display: inline-flex;
          vertical-align: bottom;
          position: relative;
          width: 100%;
        }

        .scrolling-words-box {
          width: 100%;
          text-align: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .scrolling-words-box li {
          margin: 0;
          padding: 0;
        }

        .word-pill {
          background: linear-gradient(
            180deg,
            rgba(239, 246, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.4) 100%
          );
          box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1),
            0 4px 12px rgba(59, 130, 246, 0.1),
            inset 0 0 12px rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default TicketAppHero;
