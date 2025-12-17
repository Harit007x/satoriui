"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import {
  sidebarAtom,
  useHandleClickOutside,
  useSidebarMediaQuery,
} from "@repo/common/common-library";
import MenuItem from "./menu-item";
import { Icons } from "./icons";
import { SIDENAV_ITEMS } from "@/app/utils/constants";
import Header from "./header";
import { SideNavToggleBtn } from "./side-nav-toggle-btn";

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav = ({ children }: SideNavProps) => {
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const { isSmallScreen, sidebarOpen, setSidebarOpen } = useSidebarMediaQuery(
    "(min-width: 1100px)",
    sidebarAtom
  );

  useHandleClickOutside(sideNavRef, isSmallScreen, () => setSidebarOpen(false));

  const toggleCollapse = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen w-full relative">
      {/* Sidebar */}
      <div
        ref={sideNavRef}
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
        className={clsx(
          "md:w-60 min-w-fit max-w-fit bg-white z-10 flex-1 border-r border-muted-background absolute sm:static h-screen overflow-y-auto",
          {
            "md:flex": sidebarOpen,
            hidden: !sidebarOpen,
          }
        )}
      >
        <div className="flex bg-background flex-col gap-4 w-[14rem] h-full">
          {/* Logo */}
          <div className="flex gap-4 items-center min-w-[8rem] h-16 p-3 border-b border-muted-background hidden sm:flex">
            <img
              src="/png/alera-logo.png"
              alt="Aleracare"
              className="object-cover h-6"
            />

            <div className="w-full flex justify-between items-center text-xl font-bold">
              Aleracare
              <SideNavToggleBtn
                toggleCollapse={toggleCollapse}
                collapsed={sidebarOpen}
              >
                <Icons.panelLeftClose className="h-5 w-5" />
              </SideNavToggleBtn>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col space-y-1 px-4 flex-grow">
            <div className="h-16 flex items-center sm:hidden">
              <SideNavToggleBtn
                toggleCollapse={toggleCollapse}
                collapsed={sidebarOpen}
                className={clsx({ hidden: !sidebarOpen })}
              >
                <Icons.panelLeftClose className="h-5 w-5" />
              </SideNavToggleBtn>
            </div>

            {SIDENAV_ITEMS.map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>

          <p className="text-sm font-normal m-auto p-4 tracking-wide">
            Patient Portal
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full h-full overflow-auto">
        <Header collapsed={sidebarOpen} toggleCollapse={toggleCollapse} />
        <div className="overflow-y-auto flex-1 h-full p-4 m-0">{children}</div>
      </div>
    </div>
  );
};

export default SideNav;
