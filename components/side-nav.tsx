"use client";

import { RefObject, useRef, useEffect } from "react";
import clsx from "clsx";
import MenuItem from "./menu-item";
import { Icons } from "./icons";
import Header from "./header";
import { SideNavToggleBtn } from "./side-nav-toggle-btn";
import { useSidebarMediaQuery } from "@/hooks/useSidebarMediaQuery";
import { useHandleClickOutside } from "@/hooks/useHandleClickOutside";
import { SideNavbar } from "@/utils/types";
import { useRouter } from "next/navigation";

interface SideNavProps {
  children: React.ReactNode;
  navBar: SideNavbar[];
}

const SideNav = ({ navBar, children }: SideNavProps) => {
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const rounter = useRouter();
  const { isSmallScreen, sidebarOpen, setSidebarOpen } = useSidebarMediaQuery(
    "(min-width: 1024px)",
  );

  // Prevent body scroll when sidebar is open on mobile/tablet
  useEffect(() => {
    if (isSmallScreen && sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSmallScreen, sidebarOpen]);

  useHandleClickOutside(
    sideNavRef as RefObject<HTMLDivElement>,
    isSmallScreen,
    () => setSidebarOpen(false),
  );
  const toggleCollapse = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen w-full relative">
      {/* Backdrop overlay for mobile/tablet */}
      {isSmallScreen && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sideNavRef}
        className={clsx(
          "bg-sidebar border-r border-sidebar-border h-screen  shrink-0 overflow-hidden",
          {
            // Desktop: sticky positioning
            "lg:sticky lg:top-0 lg:z-40": !isSmallScreen,

            // Width handling
            "w-72 max-w-[85vw]": isSmallScreen || sidebarOpen, // Mobile or Open Desktop
            "w-0 border-none": !isSmallScreen && !sidebarOpen, // Closed Desktop

            // Visibility/Transform
            "lg:translate-x-0": !isSmallScreen, // Always in place on desktop (width controls visibility)

            // Mobile specific transforms
            "fixed top-0 left-0 z-40 translate-x-0":
              isSmallScreen && sidebarOpen,
            "-translate-x-full fixed top-0 left-0 z-40":
              isSmallScreen && !sidebarOpen,
          },
        )}
        aria-label="Sidebar navigation"
      >
        <div className="flex flex-col w-full h-full w-[18rem]">
          {" "}
          {/* Fixed inner width to prevent content squishing during transition */}
          <div className="flex gap-4 items-center min-h-[4rem] h-16 border-b border-sidebar-border sticky top-0 bg-sidebar z-10">
            <div className="w-full flex justify-between items-center text-xl px-4">
              <div
                className="flex justify-start items-center gap-2 group cursor-pointer px-2 py-1 rounded-md select-none"
                onClick={() => rounter.push("/")}
              >
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
                        fill="var(--foreground)"
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
                        fill="var(--background)"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_3">
                        <rect width="512" height="512" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <span className="text-lg text-text font-semibold tracking-tight ">
                  Satori
                  <span className="text-primary font-normal">UI</span>
                </span>
              </div>

              <SideNavToggleBtn
                toggleCollapse={toggleCollapse}
                collapsed={!sidebarOpen}
              >
                <Icons.panelLeftClose className="h-4.5 w-4.5 m-[0.1rem] text-muted-foreground group-hover:text-text" />
              </SideNavToggleBtn>
            </div>
          </div>
          {/* Menu */}
          <div className="relative px-5 flex-grow overflow-y-auto no-scrollbar">
            {/* Top blur shadow - fixed position */}
            <div className="sticky -top-1 z-10 h-8 shrink-0 bg-gradient-to-b from-sidebar via-sidebar/80 to-transparent pointer-events-none"></div>
            {/* Scrollable content */}
            <div className="flex flex-col">
              {navBar.map((category, idx) => (
                <div key={idx} className="mt-4">
                  <p className="px-2 mb-1 text-sm font-medium ui-text text-text">
                    {category.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    {category.items.map((item, itemIdx) => (
                      <MenuItem key={itemIdx} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-gradient-to-t from-sidebar via-sidebar/80 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-sm font-normal m-auto p-3 tracking-wide"></p>
        </div>
      </aside>

      {/* Content */}
      <main className="flex flex-col w-full flex-1 min-w-0">
        <Header collapsed={!sidebarOpen} toggleCollapse={toggleCollapse} />
        <div className="flex-1 p-4 m-0 bg-background">{children}</div>
      </main>
    </div>
  );
};

export default SideNav;
