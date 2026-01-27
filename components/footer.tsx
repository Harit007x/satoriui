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
            <div className="flex items-center gap-1 bg-zinc-100 w-fit px-2 py-2 rounded-lg pr-3 border border-2 border-slate-200">
              {/* <div className="w-8 h-8 rounded-lg  text-white flex items-center justify-center shadow-md"> */}
              <Image
                src="/logo/svg-transparent-dark.svg"
                alt="Simplification logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              {/* </div> */}
              <span className="font-display font-semibold text-lg tracking-tight text-slate-900">
                Satori
                <span className="text-slate-500 font-normal leading-8">UI</span>
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
