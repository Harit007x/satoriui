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
    <footer className="relative z-10 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center shadow-md">
                <Image
                  src="/logo/logo-svg.svg"
                  alt="Simplification logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-foreground">
                Satori
                <span className="text-muted-foreground font-normal">UI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Beautiful, accessible components you can copy and paste into your
              apps. Built with Tailwind CSS.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border bg-card hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border bg-card hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Icons.mail className="h-4 w-4" />
                Stay updated
              </h4>
              <p className="text-sm text-muted-foreground">
                Get notified when we release new components.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring w-64"
              />
              <button className="px-5 py-2.5 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 SatoriUI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <span className="text-xs text-muted-foreground">
              Made with precision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
