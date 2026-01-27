import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import Showcase01 from "@/components/showcase-01";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="antialiased min-h-screen flex flex-col selection:bg-slate-200 selection:text-slate-900">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <nav className="fixed w-full z-50 top-0 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-200">
              <Image
                src="/logo/logo-svg-dark.svg"
                alt="Simplification logo"
                width={32}
                height={32}
                className="rounded-md"
              />
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-slate-900">
              Satori<span className="text-slate-400 font-normal">UI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <Link
              href="/components/dotted-modern"
              className="hover:text-slate-900 transition-colors"
            >
              Components
            </Link>

            <Link
              href="/interactions"
              className="hover:text-slate-900 transition-colors"
            >
              Interactions
            </Link>

            <Link
              href="/foundations"
              className="hover:text-slate-900 transition-colors"
            >
              Foundations
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="hidden sm:flex text-slate-400 hover:text-slate-900 transition-colors">
              <Icons.search className="h-4 w-4" />
            </button> */}
            <button className="text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-grow pt-32 pb-20 lg:pt-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Core System v2.4
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Refined <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-600 to-slate-400">
                Micro-Moves.
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              A comprehensive suite of high-fidelity, interactive, accessible
              and extensible components to use with shadcn/ui.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
              <Link
                href="/components/dotted-modern"
                className="group w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm shadow-xl shadow-slate-200/50 flex items-center justify-center gap-2"
              >
                Browse Components
                <Icons.arrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]" />
              </Link>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2 bg-white">
                <Icons.terminal className="h-4 w-4" />
                Documentation
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-slate-900">
                  50+
                </span>
                <span className="text-xs text-slate-500">Components</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-slate-900">
                  100%
                </span>
                <span className="text-xs text-slate-500">Accessible</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-slate-900">
                  MIT
                </span>
                <span className="text-xs text-slate-500">License</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto fade-in-up delay-100">
            <Showcase01 />
          </div>
        </div>
      </main>
      <section className="relative z-10 py-24 px-6 border-t border-slate-200 bg-slate-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Built for developers
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto">
              Everything you need to build beautiful interfaces, faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Icons.code,
                title: "Copy & Paste",
                description:
                  "Just copy the code and paste it into your project. No complex setup required.",
              },
              {
                icon: Icons.palette,
                title: "Fully Customizable",
                description:
                  "Every component is designed to be customized to match your brand.",
              },
              {
                icon: Icons.pointer,
                title: "Physics-Based Motion",
                description:
                  "Smooth, natural animations powered by spring physics for a tactile feel.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-md border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
