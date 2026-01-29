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
          <div className="flex items-center gap-2 group select-none">
            <div className="w-6 h-6 mb-[0.1rem]">
              <svg
                viewBox="0 0 512 512"
                fill="none"
                className="rounded-sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0 0C168.96 0 337.92 0 512 0C512 168.96 512 337.92 512 512C343.04 512 174.08 512 0 512C0 343.04 0 174.08 0 0Z"
                    fill="#000000"
                  />
                  <path
                    d="M252.438 70.875C255 73 255 73 256 75C256.117 77.0305 256.17 79.0649 256.193 81.0986C256.209 82.3805 256.225 83.6623 256.242 84.983C256.253 86.3897 256.264 87.7964 256.273 89.2031C256.279 89.9109 256.284 90.6187 256.29 91.348C256.316 95.0961 256.336 98.8441 256.35 102.592C256.363 105.691 256.391 108.788 256.432 111.886C256.482 115.63 256.506 119.373 256.513 123.117C256.52 124.541 256.535 125.965 256.559 127.389C256.758 139.931 256.758 139.931 253.589 143.84C249.438 147.303 246.353 148.213 241.062 149.188C225.746 152.635 212.498 162.269 203.715 175.184C194.935 189.603 191.293 206.448 194.407 223.189C198.637 240.256 208.14 254.666 223 264C230.638 268.537 238.037 271.027 246.652 272.848C250.538 274.185 252.331 275.928 255 279C255.33 279.33 255.66 279.66 256 280C256.12 281.992 256.17 283.989 256.193 285.985C256.209 287.267 256.225 288.549 256.242 289.87C256.253 291.282 256.264 292.694 256.273 294.105C256.279 294.814 256.284 295.523 256.29 296.253C256.316 300.008 256.336 303.762 256.35 307.517C256.367 311.39 256.411 315.262 256.462 319.134C256.496 322.115 256.508 325.096 256.513 328.078C256.52 329.505 256.535 330.932 256.559 332.358C256.758 344.928 256.758 344.928 253.654 348.88C248.64 352.885 243.095 351.594 237 351C200.866 346.731 167.705 325.984 145 298C131.964 280.715 123.165 261.059 118.458 239.966C118.158 238.676 117.824 237.394 117.456 236.122C115.305 228.146 115.605 219.885 115.625 211.688C115.625 210.885 115.625 210.082 115.626 209.255C115.658 196.775 116.457 185.035 120 173C120.182 172.344 120.364 171.688 120.551 171.013C130.552 135.46 155.195 105.313 186.875 86.8125C201.49 78.7205 216.412 73.277 232.875 70.25C233.565 70.1221 234.254 69.9941 234.965 69.8623C241.043 68.823 246.857 67.8313 252.438 70.875Z"
                    fill="var(--primary)"
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: "scale(1, 0.9)",
                    }}
                  />
                  <path
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: "scale(1, 0.9)",
                    }}
                    d="M317.438 174.219C351.124 191.062 377.956 220.117 390 256C391.933 262.264 393.589 268.598 395 275C395.188 275.827 395.375 276.654 395.569 277.507C397.152 285.177 397.347 292.684 397.313 300.5C397.309 301.488 397.309 301.488 397.306 302.495C397.099 342.013 381.718 377.524 353.67 405.376C339.427 419.224 322.351 428.68 304 436C302.956 436.42 301.912 436.84 300.836 437.273C290.081 441.214 273.349 445.717 262 443C258.864 440.449 257.193 438.943 256.372 434.927C256.371 433.78 256.37 432.634 256.369 431.453C256.357 430.148 256.344 428.843 256.331 427.499C256.343 426.083 256.357 424.666 256.371 423.25C256.37 421.789 256.368 420.329 256.364 418.868C256.361 415.812 256.376 412.756 256.403 409.699C256.437 405.788 256.431 401.879 256.413 397.968C256.402 394.953 256.411 391.938 256.426 388.924C256.431 387.482 256.431 386.04 256.424 384.599C256.419 382.581 256.442 380.564 256.467 378.547C256.473 377.401 256.479 376.254 256.485 375.073C257.109 371.35 258.409 369.693 261 367C263.94 365.1 266.841 364.551 270.25 363.875C286.824 359.823 300.572 350.274 310 336C318.283 321.916 321.75 304.619 318.094 288.531C315.937 280.279 313.017 272.962 308 266C307.233 264.851 307.233 264.851 306.449 263.68C297.673 251.321 282.274 242.726 267.438 240.125C263.426 239.272 260.951 237.951 258 235C256.607 232.215 256.85 229.91 256.823 226.794C256.81 225.489 256.797 224.183 256.784 222.839C256.776 221.407 256.769 219.975 256.762 218.543C256.758 217.823 256.754 217.103 256.75 216.361C256.729 212.549 256.714 208.737 256.705 204.925C256.694 200.991 256.66 197.057 256.62 193.123C256.594 190.095 256.585 187.068 256.582 184.04C256.577 182.59 256.565 181.14 256.547 179.69C256.522 177.659 256.526 175.626 256.53 173.594C256.524 172.439 256.518 171.284 256.512 170.093C257.107 166.32 258.317 164.674 261 162C276.795 156.735 302.764 167.682 317.438 174.219Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_3">
                    <rect width="512" height="512" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-slate-900">
              Satori
              <span className="text-primary font-normal">UI</span>
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
            <button className="text-xs font-semibold bg-primary hover:bg-sky-500 text-white px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md">
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
                className="group w-full sm:w-auto px-6 py-3 bg-primary hover:bg-sky-500 text-white rounded-lg font-semibold text-sm shadow-xl shadow-slate-200/50 flex items-center justify-center gap-2"
              >
                Browse Components
                <Icons.arrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]" />
              </Link>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2 bg-white">
                <Icons.terminal className="h-4 w-4 text-primary" />
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
