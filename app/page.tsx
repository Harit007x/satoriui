"use client";
import { Icons } from "@/components/icons";
import Link from "next/link";
import TypewriterLoop from "../packages/typewriter-loop/typewriter-loop";
import ProButton from "@/packages/pro-button/pro-button";
import BlurReveal from "@/packages/blur-reveal/blur-reveal";
import { motion } from "motion/react";
import ShimmerText from "@/packages/shimmer-text/shimmer-text";
import BeaconBadge from "@/packages/beacon-badge/beacon-badge";
import CyberpunkButton from "../packages/cyberpunk-button/cyberpunk-button";

export default function Home() {
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
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center min-h-screen px-6 pt-24">
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

          {/* Headline with TypewriterLoop */}
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Turn raw ideas into
            </h1>
            <TypewriterLoop
              LeadText=""
              morphingText={[
                "Infographics.",
                "Visual Content.",
                "Stunning Slides.",
                "Scroll-Stoppers.",
              ]}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight justify-center"
              LeadTextClassName="text-white"
              interval={4000}
              staticColor="green"
              darkGradientBackgroundLock={true}
            />
          </div>

          {/* Subtitle with EncodedReveal */}
          <BlurReveal
            className="mt-6 text-base md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed"
            speedReveal={3}
          >
            Describe what you want, and Vislo's AI generates polished, share-ready visuals in seconds. No design skills needed.
          </BlurReveal>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link href="https://app.vislo.ai/signup">
              <ProButton text="Start Creating for Free" size="sm" pixelColor="emerald" />
            </Link>
            <Link
              href="#showcase"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-white/70 border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              See Examples
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-10 pt-8 text-center"
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
        </div>
      </main>

      {/* ── Customer Reviews Bento Grid ────────────────────────────────── */}
      <section id="showcase" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <BeaconBadge label="REVIEWS" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Vislo customers are saying
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Creators, brands, and agency teams using Vislo to turn raw ideas into scroll-stopping visuals — automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
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
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────── */}
      <section id="features" className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <BeaconBadge label="Features" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything you need to create stunning visuals
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              No design skills required. Our AI agent takes care of the layout, style, and formatting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Icons.sparkles,
                title: "AI-Powered Generation",
                description:
                  "Describe your idea in plain text and watch it transform into a polished infographic in seconds.",
              },
              {
                icon: Icons.layers,
                title: "100+ Adaptable Templates",
                description:
                  "Choose from a massive library of professionally designed layouts that automatically adapt to your content.",
              },
              {
                icon: Icons.palette,
                title: "Brand Consistency",
                description:
                  "Upload your brand kit. Every infographic, chart, and graphic automatically matches your colors and fonts.",
              },
              {
                icon: Icons.pointer,
                title: "Visual Editing Suite",
                description:
                  "Fine-tune every element with a powerful drag-and-drop editor. Adjust text, colors, layouts, and shapes.",
              },
              {
                icon: Icons.downloadArrow || Icons.chevronDown,
                title: "High-Res PNG Export",
                description:
                  "Download crystal-clear, high-resolution PNG images optimized for LinkedIn, X (Twitter), and presentations.",
              },
              {
                icon: Icons.messageSquare,
                title: "Agentic Refinement",
                description:
                  "An AI agent that iterates with you. Give feedback in plain English and watch it refine your design dynamically.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-white/[0.06] bg-[#0E0F12]/60 hover:bg-[#121419]/80 hover:border-[#00E091]/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-white/[0.04] flex items-center justify-center mb-6 group-hover:bg-[#00E091]/10 transition-colors text-white/70 group-hover:text-[#00E091] shadow-inner">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-[#00E091] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ─────────────────────────────────────────── */}
      <section id="pricing" className="relative z-10 py-28 px-6 border-t border-white/[0.06] bg-[#090A0D]/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <BeaconBadge label="Pricing" beconColor="green" staticTheme="dark" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              One plan. Everything included.
            </h2>
            <p className="text-white/40 max-w-md mx-auto text-sm">
              Lock in the founding member price before it's gone.
            </p>
          </div>

          <div className="relative max-w-md mx-auto group">
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

              <Link href="https://app.vislo.ai/signup" className="block w-full">
                <CyberpunkButton buttonText="Get Started Now" pixelColor="white" buttonColor="lime" className="w-full justify-center" />
              </Link>
              <p className="text-center text-[10px] text-white/40 mt-4">
                Start free, upgrade when you're ready. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ready to Create Section ───────────────────────────────────── */}
      <section className="relative z-10 py-28 px-6 border-t border-white/[0.06] text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00E091]/5 rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to create your first infographic?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
            Start with 3 free generations. No credit card required.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="https://app.vislo.ai/signup">
              <ProButton text="Start Creating for Free" size="sm" pixelColor="emerald" />
            </Link>
          </div>
        </div>
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
