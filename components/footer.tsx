import { Icons } from "./icons";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Components: ["Buttons", "Forms", "Navigation", "Feedback", "Data Display"],
    Resources: ["Documentation", "Examples", "Changelog", "Roadmap"],
    Community: ["Discord", "GitHub", "Twitter", "Showcase"],
    Legal: ["Privacy", "Terms", "License"],
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 bg-zinc-100 w-fit px-2 py-2 rounded-lg pr-3 border border-2 border-slate-200 select-none">
              {/* <div className="w-8 h-8 rounded-lg  text-white flex items-center justify-center shadow-md"> */}
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
              {/* </div> */}
              <span className="font-display font-semibold text-lg tracking-tight text-slate-900">
                Satori
                <span className="text-primary font-normal">UI</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Beautiful, accessible components you can copy and paste into your
              apps. Built with Tailwind CSS.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Icons.github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Icons.twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Icons.mail className="h-4 w-4" />
                Stay updated
              </h4>
              <p className="text-sm text-slate-600">
                Get notified when we release new components.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 w-64"
              />
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 SatoriUI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <span className="text-xs text-slate-500">Made with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
