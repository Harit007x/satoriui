"use client";
import { useState, useRef } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import ProButton from "@/packages/pro-button/pro-button";
import { motion, AnimatePresence } from "motion/react";
import ShimmerText from "@/packages/shimmer-text/shimmer-text";
import BeaconBadge from "@/packages/beacon-badge/beacon-badge";
import CyberpunkButton from "@/packages/cyberpunk-button/cyberpunk-button";
const visloFeatures = [
  {
    title: "AI (agentic) generation",
    description: "Describe what you want to create in plain text. The AI agent asks clarifying questions to personalize and optimize the visual layout for your topic.",
    icon: Icons.sparkles,
    image: "/features/agent.png",
  },
  {
    title: "Full fledge editor",
    description: "Fine-tune every layer, text block, brand asset, and color path inside our interactive custom editor. Get absolute design freedom with visual aids.",
    icon: Icons.palette,
    image: "/features/editor.png",
  },
  {
    title: "Predefined polished templates",
    description: "Browse a huge library of templates categorized by topic, structure, and style. Select any template and let the AI populate it with your branding.",
    icon: Icons.layers,
    image: "/features/templates.png",
  }
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveFeature(index);
    }, 85); // 85ms debounce prevents rapid cursor movement jitter
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0C0E] text-white flex flex-col selection:bg-[#00E091]/30 selection:text-white">
      {/* Vislo Dot Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #00e091 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />


      {/* ── Floating Capsule Navbar ────────────────────────────────────── */}
      <div className="fixed w-full z-50 top-6 px-4 flex justify-center transition-all duration-300">
        <nav className="relative flex items-center justify-between w-full max-w-5xl px-4 py-3 rounded-xl bg-[#0B0C0E]/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group select-none cursor-pointer pl-2">
            <img src="/vislo.jpeg" alt="Vislo Logo" className="w-6 h-6 rounded-sm object-cover border border-white/[0.08]" />
            <span className="font-display font-semibold text-[19px] tracking-tight text-white group-hover:text-white/90 transition-colors">
              vislo<span className="text-[#00E091]">.ai</span>
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            {[
              { href: "#features", label: "Features" },
              { href: "#showcase", label: "Showcase" },
              { href: "#pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="https://app.vislo.ai/login"
              className="text-[13px] font-medium text-white/70 hover:text-white transition-colors px-3 py-2 rounded-full border border-transparent hover:border-white/10 hidden sm:block"
            >
              Log In
            </Link>
            <Link href="https://app.vislo.ai/signup">
              <button className="text-[13px] font-medium bg-[#00E091] text-black hover:bg-[#00E091]/95 px-4 py-2 rounded-md transition-all shadow-[0_0_20px_rgba(0,224,145,0.2)] hover:shadow-[0_0_25px_rgba(0,224,145,0.4)]">
                Start Free
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center min-h-screen px-6 pt-36">
        {/* Vislo Center Glow Radial Blur Overlay */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"
          style={{
            width: "550px",
            height: "550px",
            backgroundColor: "#00E091",
            opacity: 0.15,
            filter: "blur(130px)",
          }}
        />
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Status badge */}
          <BeaconBadge label="AI-Powered generation" beconColor="green" staticTheme="dark" />

          {/* Headline with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
          >
            Turn ideas into <span className="text-[#00E091]">scroll-</span><br />
            <span className="text-[#00E091]">stopping</span> infographics
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-base md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed"
          >
            Describe what you want, and Vislo's AI generates polished, share-ready visuals in seconds. No design skills needed.

          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link href="https://app.vislo.ai/signup">
              <ProButton text="Start Creating for Free" size="xs" pixelColor="emerald" />
            </Link>
            <Link
              href="#showcase"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              See Examples
            </Link>
          </motion.div>
        </div>

        {/* ── Dashboard Preview Mockup ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full max-w-5xl px-4 md:px-0 mx-auto group z-20"
        >
          {/* Ambient Green Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E091]/25 to-emerald-500/10 rounded-2xl blur-3xl opacity-30 group-hover:opacity-45 transition duration-1000 pointer-events-none" />

          {/* Mockup Frame */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#0E0F12]/80 p-2 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-sm overflow-hidden group-hover:border-white/[0.12] transition-colors duration-300">

            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-3 pb-2 border-b border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="hidden sm:flex items-center justify-center bg-white/[0.03] border border-white/[0.05] rounded-md px-16 py-0.5 text-[10px] text-white/30 font-medium tracking-wide">
                app.vislo.ai/dashboard
              </div>
              <div className="w-12" />
            </div>

            {/* The Dashboard Screenshot Image */}
            <div className="relative rounded-lg overflow-hidden mt-1.5 bg-[#090A0D]">
              <img
                src="/dash.png"
                alt="Vislo Dashboard Preview"
                className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.005] transition-transform duration-700 ease-out"
              />
              {/* Smooth bottom gradient overlay to fade into page background */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0C0E] to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-10 mt-16 text-center z-20"
        >
          {[
            { value: "3s", label: "Avg Generation" },
            { value: "100+", label: "Layouts" },
            { value: "20k+", label: "Creators" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.2, 0.0, 0.2, 1],
                  },
                },
              }}
              className="flex flex-col"
            >
              <span className="text-xl font-display font-bold text-white/95">
                {stat.value}
              </span>
              <span className="text-[10px] text-white/40 tracking-wider uppercase mt-0.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* ── Customer Reviews Bento Grid ────────────────────────────────── */}
      <section id="showcase" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 space-y-4"
          >
            <BeaconBadge label="REVIEWS" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Vislo customers are saying
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Creators, brands, and agency teams using Vislo to turn raw ideas into scroll-stopping visuals — automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl"
          >
            {[
              {
                text: "I used to spend hours designing infographics for LinkedIn. Now Vislo generates a polished post in seconds. My content reach doubled in the first month without hiring a designer.",
                name: "Amaya Santos",
                role: "Founder, Linework Studio",
                initials: "AS",
                hasQuote: true
              },
              {
                text: "Our content-to-lead flow started converting the day we launched. Vislo replaced three design tools we were duct-taping together and our cost-per-post dropped by half.",
                name: "Priya Shah",
                role: "Growth Lead, Meadow & Mane",
                initials: "PS",
                hasQuote: false
              },
              {
                text: "LinkedIn-first gating alone grew our audience by 18k in six weeks. The generator keeps firing even when my team is asleep — it genuinely runs in the background.",
                name: "Marcus Obi",
                role: "Founder, Drip Studio",
                initials: "MO",
                hasQuote: false
              },
              {
                text: "We moved off our old design tool and saved about $200 a month. No more per-seat pricing surprises, and the templates just keep updating with our branding automatically.",
                name: "Elena Varga",
                role: "Ops Manager, Kiln Ceramics",
                initials: "EV",
                hasQuote: false
              },
              {
                text: "We launched a carousel on Monday and had 400 downloads of our guide by Tuesday morning. My team was out that day and everything ran itself. That's the whole product for me.",
                name: "Kofi Mensah",
                role: "Owner, Saffron & Salt",
                initials: "KM",
                hasQuote: true
              },
              {
                text: "The brand kit is the real unlock. Four of us edit without stepping on each other and every graphic has the correct colors + logo. My consulting business finally scaled past me.",
                name: "Dani Reyes",
                role: "Coach, Reyes Training",
                initials: "DR",
                hasQuote: false
              },
              {
                text: "Building Vislo came from scratching my own itch — I kept spending hours on slides overnight. Seeing creators rely on it every day to actually close sales is the best part of this job.",
                name: "Hovin Kalathiya",
                role: "Founder, Vislo",
                initials: "HK",
                hasQuote: false
              },
              {
                text: "Campaign analytics in Vislo show graphics downloaded, click-through rates, and social conversions in one place. We finally know which templates actually drove revenue, not just likes.",
                name: "Tomás Ribeiro",
                role: "Performance Marketer, Onda Agency",
                initials: "TR",
                hasQuote: false
              },
              {
                text: "Setup took me fifteen minutes. I'm not technical at all. My brand is fully loaded and I generate lead-gen infographics before I even open my laptop in the morning.",
                name: "Iris Kowalski",
                role: "Coach, Kindling Pilates",
                initials: "IK",
                hasQuote: true
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#0B0C0E]/95 p-8 flex flex-col justify-between min-h-[260px] hover:bg-[#121419]/90 transition-colors duration-300">
                <div>
                  {review.hasQuote && (
                    <div className="text-[#00E091] text-4xl font-serif leading-none mb-3 -mt-2">”</div>
                  )}
                  <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-normal">
                    “{review.text}”
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/[0.08] flex items-center justify-center font-display text-[11px] font-bold text-[#00E091] shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white">{review.name}</span>
                    <span className="text-[10px] text-white/40">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────── */}
      <section id="features" className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          {/* Top Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 space-y-4"
          >
            <BeaconBadge label="Features" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything you need to create stunning visuals
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              No design skills required. Our AI agent takes care of the layout, style, and formatting.
            </p>
          </motion.div>

          {/* Interactive Feature Display */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0D0E12]/10 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]"
          >
            {/* Left Column: Accordion Features list */}
            <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    The infographic engine creators wish they switched to
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                    AI agentic refinement, a full-featured custom canvas editor, and hundreds of polished templates — all with zero design experience required.
                  </p>
                </div>

                <div className="pt-2">
                  <Link href="#pricing" className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white transition-colors py-2 px-4 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] w-fit">
                    See pricing
                  </Link>
                </div>
              </div>

              {/* Minimalist Border-based Accordion list */}
              <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
                {visloFeatures.map((feature, index) => {
                  const isActive = activeFeature === index;
                  return (
                    <div
                      key={index}
                      className="py-4 cursor-pointer select-none transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center transition-colors shrink-0 ${
                            isActive ? "text-[#00E091]" : "text-white/30"
                          }`}
                        >
                          <feature.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-display font-medium text-sm transition-colors ${
                              isActive ? "text-white" : "text-white/40 hover:text-white/60"
                            }`}
                          >
                            {feature.title}
                          </h4>
                          <motion.p
                            initial={false}
                            animate={{
                              height: isActive ? "auto" : 0,
                              opacity: isActive ? 1 : 0,
                              marginTop: isActive ? 6 : 0,
                            }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xs text-white/40 leading-relaxed overflow-hidden pr-4"
                          >
                            {feature.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t border-white/[0.08]" />
              </div>
            </div>

            {/* Right Column: Full-Bleed Grid Backplate + Floating Mockup Card */}
            <div className="relative overflow-hidden flex items-center justify-center p-8 sm:p-12 min-h-[350px] lg:min-h-full bg-gradient-to-br from-[#0A120E] via-[#0B0C0E] to-[#0B0C0E]">
              {/* Halftone / dot grid background overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />
              {/* Subtle radial ambient green glow overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,145,0.08)_0%,transparent_70%)]" />

              {/* Floating Mockup Card */}
              <div className="relative w-full max-w-sm rounded-xl border border-white/[0.08] bg-[#0E0F12]/80 backdrop-blur-md shadow-2xl p-1.5 transition-all duration-300 z-10">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#0B0C0E]/80 border border-white/[0.04]">
                  {visloFeatures.map((feat, idx) => (
                    <motion.img
                      key={idx}
                      src={feat.image}
                      alt={feat.title}
                      initial={false}
                      animate={{
                        opacity: activeFeature === idx ? 1 : 0,
                        scale: activeFeature === idx ? 1 : 0.97,
                        y: activeFeature === idx ? 0 : 8,
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        pointerEvents: activeFeature === idx ? "auto" : "none",
                        zIndex: activeFeature === idx ? 10 : 0
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Campaigns & Analytics Section ─────────────────────────────────────────── */}
      <section id="campaigns" className="relative z-10 py-28 px-6 border-t border-white/[0.06] bg-[#090A0D]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 space-y-4"
          >
            <BeaconBadge label="Analytics" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Track performance & ship visual campaigns
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              Build template variations, schedule blasts to social networks, and watch metrics roll in.
            </p>
          </motion.div>

          {/* Grid Box Layout mimicking Botyoo's Campaigns Grid */}
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0D0E12]/30 backdrop-blur-md">
            {/* Top half: 2-column grid for Campaign cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {/* Column 1: Analytics Chart */}
              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
                {/* Visual Analytics Card Mockup */}
                <div className="relative aspect-[1.5] w-full rounded-xl border border-white/[0.06] bg-[#090A0C] p-6 shadow-inner flex flex-col justify-between overflow-hidden group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-white/30 tracking-wider uppercase">Campaign-001</span>
                      <h4 className="text-2xl font-bold text-white mt-1">
                        1,248 <span className="text-xs font-normal text-white/40">Views</span>
                      </h4>
                      <span className="text-[10px] text-[#00E091] font-medium">+38% vs last week</span>
                    </div>
                    <div className="w-16 h-12 flex items-end gap-1 select-none">
                      {[35, 45, 30, 60, 40, 75, 50].map((val, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-t bg-[#00E091]/20 group-hover:bg-[#00E091]/40 transition-colors duration-500"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Skeleton Metrics */}
                  <div className="space-y-2 mt-4">
                    {[
                      { label: "Reach", val: "2,340", pct: "75%" },
                      { label: "Shares", val: "412", pct: "40%" },
                      { label: "Clicks", val: "189", pct: "20%" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="text-white/40">{item.label}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full overflow-hidden">
                            <div className="h-full bg-[#00E091] rounded-full" style={{ width: item.pct }} />
                          </div>
                          <span className="font-mono text-white/60 w-8 text-right">{item.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="font-display font-semibold text-lg text-white">
                    Campaign analytics you can act on
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed max-w-md">
                    Watch views, clicks, and conversion rates update in real time — one clean dashboard per visual asset, no spreadsheet needed.
                  </p>
                </div>
              </div>

              {/* Column 2: Scheduler / Blasts */}
              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
                {/* Visual Campaigns Mockup Card */}
                <div className="relative aspect-[1.5] w-full rounded-xl border border-white/[0.06] bg-[#090A0C] p-6 shadow-inner flex flex-col justify-center gap-3 overflow-hidden">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00E091] animate-pulse" />
                      <div>
                        <h5 className="text-[11px] font-semibold text-white">Summer launch</h5>
                        <p className="text-[9px] text-white/30 mt-0.5">Exporting assets to Pinterest...</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#00E091] px-2 py-0.5 bg-[#00E091]/10 border border-[#00E091]/20 rounded-full font-medium">Live</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div>
                        <h5 className="text-[11px] font-semibold text-white/60">Waitlist infographic reminder</h5>
                        <p className="text-[9px] text-white/30 mt-0.5">Scheduled draft to X (Twitter)</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-white/40 px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-full">8:30 pm</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="font-display font-semibold text-lg text-white">
                    Ship campaigns in minutes, not days
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed max-w-md">
                    Build template variations, schedule automated social cross-posts, and publish to multiple channels instantly from one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row: 4 columns divided by thin lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border-t border-white/[0.08]">
              {[
                {
                  title: "Instant exports",
                  desc: "Infographics render the moment you request — no cron, no queue, ready to share instantly.",
                  icon: Icons.downloadArrow
                },
                {
                  title: "Built to scale",
                  desc: "Generate dozens of variations concurrently without dropping frames or quality degradation.",
                  icon: Icons.barChart2
                },
                {
                  title: "Secure by default",
                  desc: "Workspace isolation, client kit encryption, and secure social token management.",
                  icon: Icons.lockKeyhole
                },
                {
                  title: "Made for creators",
                  desc: "Tailored aspect ratios, color systems, and formatting optimized for maximum attention.",
                  icon: Icons.sparkles
                }
              ].map((item, i) => (
                <div key={i} className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-white/70">
                    <item.icon className="w-3.5 h-3.5 text-[#00E091]" />
                    <span className="text-xs font-semibold text-white tracking-wide">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Section ─────────────────────────────────────────── */}
      <section id="pricing" className="relative z-10 py-28 px-6 border-t border-white/[0.06] bg-[#090A0D]/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 space-y-4"
          >
            <BeaconBadge label="Pricing" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              One plan. Everything included.
            </h2>
            <p className="text-white/40 max-w-md mx-auto text-sm">
              Lock in the founding member price before it's gone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-md mx-auto group"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-[#00E091]/35 to-transparent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-[#0B0C0E]/90 border border-white/[0.08] hover:border-[#00E091]/25 transition-all duration-300 rounded-2xl p-8 sm:p-10 backdrop-blur-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <ShimmerText variant="green" className="font-semibold text-xs tracking-wider uppercase mb-1">
                    Founding Member
                  </ShimmerText>
                  <h3 className="text-xl font-bold text-white">Lifetime Rate</h3>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-white">$19<span className="text-sm font-normal text-white/40">/mo</span></div>
                  <div className="text-[10px] text-[#00E091] font-semibold tracking-wider uppercase mt-1">Saves 60%</div>
                </div>
              </div>

              <div className="h-px bg-white/[0.08] my-6" />

              <ul className="space-y-4 mb-8 text-xs text-white/70">
                {[
                  "Unlimited infographics & visuals",
                  "All 100+ templates & layouts",
                  "Brand kit upload (colors, fonts, logo)",
                  "High-res PNG export optimized for LinkedIn",
                  "Full visual canvas editor",
                  "Priority AI generation speed",
                  "Email support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-3.5 h-3.5 text-[#00E091] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center w-full">
                <Link href="https://app.vislo.ai/signup" className="block w-60 text-center">
                  <CyberpunkButton buttonText="Get Started Now" pixelColor="white" buttonColor="lime" className="w-full justify-center" />
                </Link>
              </div>
              <p className="text-center text-[10px] text-white/40 mt-4">
                Start free, upgrade when you're ready. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Ready to Create Section ───────────────────────────────────── */}
      <section className="relative z-10 py-28 px-6 border-t border-white/[0.06] text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00E091]/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl mx-auto space-y-6"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to create your first infographic?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
            Start with 3 free generations. No credit card required.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="https://app.vislo.ai/signup">
              <ProButton text="Start Creating for Free" size="xs" pixelColor="emerald" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="relative z-10 w-full border-t border-white/[0.08] bg-[#090A0D]/60 backdrop-blur-sm pt-16 pb-8 text-white mt-auto">
        <div className="relative mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2 group select-none cursor-pointer">
              <img src="/vislo.jpeg" alt="Vislo Logo" className="w-5 h-5 rounded-sm object-cover border border-white/[0.08]" />
              <span className="font-display font-semibold text-base tracking-tight text-white group-hover:text-white/90 transition-colors">
                vislo<span className="text-[#00E091]">.ai</span>
              </span>
            </div>
            <p className="text-white/40 text-xs max-w-sm text-center sm:text-left leading-relaxed">
              AI-powered visual content that wins hearts (and pipeline) on LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-white/50">
            <div className="flex gap-6">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="https://linkedin.com/company/vislo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E091] transition-colors flex items-center gap-1">
                <Icons.linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
            <span className="hidden sm:inline text-white/10">|</span>
            <p>&copy; {new Date().getFullYear()} Vislo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
