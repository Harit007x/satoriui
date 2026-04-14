"use client";
import React from "react";
import KineticGrid from "@/packages/kinetic-grid/kinetic-grid";
import BlurReveal from "@/packages/blur-reveal/blur-reveal";
import SlideUpReveal from "@/packages/slide-up-reveal/slide-up-reveal";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Code2, 
  Server, 
  Cloud, 
  Terminal, 
  CreditCard, 
  Rocket, 
  CloudCheck,
  ShieldCheck,
  Zap,
  Share2,
  TrendingUp,
  Wallet,
  Store,
  Layers,
  Infinity,
  Link as LinkIcon,
  Code as CodeIcon,
  Mail,
  Linkedin,
  Github
} from "lucide-react";

const ScalableWebApp: React.FC = () => {
  return (
    <KineticGrid
      globalColor="monochrome"
      className="text-zinc-400 selection:bg-zinc-800 selection:text-zinc-100 min-h-screen flex flex-col relative overflow-x-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Navigation */}
      <header className="w-full border-b border-white/[0.08] sticky top-0 z-50 bg-white/[0.03] backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-zinc-100 font-medium tracking-tighter text-lg uppercase">
            SYSBUILD
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#services"
              className="hover:text-zinc-100 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-zinc-100 transition-colors"
            >
              Process
            </a>
            <a href="#work" className="hover:text-zinc-100 transition-colors">
              Work
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <BlurReveal
            className="text-white text-[11px] tracking-widest uppercase text-white/60"
            speedReveal={3}
          >
            Accepting new projects
          </BlurReveal>
        </motion.div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-50 leading-tight max-w-4xl">
          <SlideUpReveal split="words" stagger={0.08} className="justify-center">
            We Build Scalable Web Applications with Real-World Integrations
          </SlideUpReveal>
        </h1>
        <BlurReveal
          className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed"
          speedReveal={3}
        >
          From MVPs to production-ready systems - we help startups and
          businesses launch fast, integrate payments, and scale confidently.
        </BlurReveal>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="bg-zinc-950 border border-zinc-800 text-zinc-100 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-900 transition-colors w-full sm:w-auto text-center"
          >
            Book a Call
          </a>
        </motion.div>
      </section>

      {/* 2. Trust / Positioning Strip */}
      <div className="border-y border-zinc-900 bg-zinc-950 py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-zinc-500 mb-6">
            Built with modern technologies. Designed for performance. Deployed
            for scale.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-medium tracking-tight text-zinc-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-zinc-400" />
              Fast delivery
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={18} className="text-zinc-400" />
              Clean architecture
            </span>
            <span className="flex items-center gap-2">
              <Server size={18} className="text-zinc-400" />
              Production-ready systems
            </span>
            <span className="flex items-center gap-2">
              <Cloud size={18} className="text-zinc-400" />
              AWS-powered infrastructure
            </span>
          </div>
        </div>
      </div>

      {/* 3. Services Section */}
      <section
        id="services"
        className="py-24 md:py-32 px-6 max-w-6xl mx-auto w-full"
      >
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Service 1 */}
          <div className="group border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)] hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
              Fullstack Web Development
            </h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
              We design and develop end-to-end web applications tailored to your
              business needs.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Frontend (React, Next.js)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Backend APIs (FastAPI, Node.js)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Database design (PostgreSQL, MongoDB)
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="group border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)] hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100">
              <CreditCard size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
              Payment & Integration Systems
            </h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
              We build systems that handle real-world transactions seamlessly.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Payment gateway integrations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                QR-based payment flows
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>POS &
                third-party integrations
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="group border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)] hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
              MVP Development for Startups
            </h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
              Launch your idea fast with a scalable foundation.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>Rapid
                prototyping
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Scalable backend architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>Clean
                UI systems
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="group border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)] hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100">
              <CloudCheck size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
              Cloud Deployment & DevOps
            </h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
              We ensure your product runs smoothly in production.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>AWS
                (EC2, S3, RDS, CloudFront)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>CI/CD
                pipelines
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                Performance optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section
        id="process"
        className="py-24 border-y border-zinc-900 bg-zinc-950/30 px-6"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50 mb-16">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-zinc-800 -z-10"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-100 mb-6 mx-auto md:mx-0">
                1
              </div>
              <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-2 text-center md:text-left">
                Understand
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                We deeply understand your product, users, and business goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-100 mb-6 mx-auto md:mx-0">
                2
              </div>
              <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-2 text-center md:text-left">
                Plan
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                We design scalable architecture and define clear milestones.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-100 mb-6 mx-auto md:mx-0">
                3
              </div>
              <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-2 text-center md:text-left">
                Build
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                We develop fast, clean, and production-ready systems.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-100 mb-6 mx-auto md:mx-0">
                4
              </div>
              <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-2 text-center md:text-left">
                Deploy
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                We deploy on AWS with performance, security, and reliability in
                mind.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-100 mb-6 mx-auto md:mx-0">
                5
              </div>
              <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-2 text-center md:text-left">
                Scale
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                We support you in scaling your product as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Tech Stack & Why Us (Combined Layout) */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-zinc-50 mb-10">
              Our Tech Stack
            </h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    React.js
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    Next.js
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    shadcn UI
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    FastAPI
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    Node.js
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    Express.js
                  </span>
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    Django
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">
                    Database
                  </h4>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-700"></span>{" "}
                      PostgreSQL
                    </span>
                    <span className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-700"></span>{" "}
                      MongoDB
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">
                    Design
                  </h4>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-700"></span>{" "}
                      Figma
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">
                  Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300">
                    AWS (EC2, S3, RDS, CloudFront)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-zinc-50 mb-10">
              Why Work With Us
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ShieldCheck size={20} className="text-zinc-300" />
                </div>
                <div>
                  <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Production-Focused Development
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    We don't just build features — we build systems that work in
                    real-world conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Zap size={20} className="text-zinc-300" />
                </div>
                <div>
                  <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Speed + Quality
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Fast delivery without compromising clean architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Share2 size={20} className="text-zinc-300" />
                </div>
                <div>
                  <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Real Integration Experience
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    We've worked with payment systems, QR flows, and POS
                    integrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <TrendingUp size={20} className="text-zinc-300" />
                </div>
                <div>
                  <h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Scalable Systems
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Built to grow with your business — not break under pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section
        id="work"
        className="py-24 border-y border-zinc-900 bg-zinc-950/30 px-6"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50 mb-16">
            Selected Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20 hover:border-zinc-700 transition-colors">
              <div className="bg-zinc-950 h-48 w-full border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-center p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <Wallet size={48} className="text-zinc-700 relative z-10" />
              </div>
              <div className="p-8 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition-colors hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
                <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
                  Payment Integration System
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  Built a full payment flow with QR-based transactions and
                  gateway integrations.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-500">
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    Real-time payment handling
                  </span>
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    Secure API architecture
                  </span>
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    Scalable backend system
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20 hover:border-zinc-700 transition-colors">
              <div className="bg-zinc-950 h-48 w-full border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-center p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <Store size={48} className="text-zinc-700 relative z-10" />
              </div>
              <div className="p-8 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">
                  POS + Waiter App Integration
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  Developed a system for handling payments and order workflows.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-500">
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    Multi-payment support
                  </span>
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    QR & card integration
                  </span>
                  <span className="bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    Clean UI for operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing / Engagement */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50 mb-4">
            Engagement Models
          </h2>
          <p className="text-sm text-zinc-500 font-medium">
            Custom pricing based on project scope
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Model 1 */}
          <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-950 flex flex-col items-center text-center">
            <Rocket size={24} className="text-zinc-300 mb-6" />
            <h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3">
              MVP Build
            </h3>
            <p className="text-sm text-zinc-500">
              Perfect for startups launching their first version.
            </p>
          </div>

          {/* Model 2 */}
          <div className="border border-zinc-700 rounded-2xl p-8 bg-zinc-950 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50"></div>
            <Layers size={24} className="text-zinc-100 mb-6" />
            <h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3">
              Full Product Development
            </h3>
            <p className="text-sm text-zinc-400">
              Complete end-to-end system development.
            </p>
          </div>

          {/* Model 3 */}
          <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-950 flex flex-col items-center text-center">
            <Infinity size={24} className="text-zinc-300 mb-6" />
            <h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3">
              Ongoing Development
            </h3>
            <p className="text-sm text-zinc-500">
              Continuous improvements, scaling, and support.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Call To Action */}
      <section
        id="contact"
        className="py-32 px-6 border-t border-zinc-900 relative overflow-hidden"
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          }}
        ></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50 mb-6">
            Let's Build Something Powerful
          </h2>
          <p className="text-base text-zinc-400 mb-10">
            Have an idea or need to scale your product? Let's talk and make it
            happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-zinc-100 text-zinc-950 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="bg-zinc-900 border border-zinc-800 text-zinc-100 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-100 font-medium tracking-tighter text-base uppercase">
            SYSBUILD
          </div>

          <nav className="flex gap-6 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-zinc-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-6 text-sm text-zinc-500 font-medium">
            <a
              href="#"
              className="hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </footer>
    </KineticGrid>
  );
};

export default ScalableWebApp;
