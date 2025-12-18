"use client";

import { RefObject, useRef } from "react";
import clsx from "clsx";

import MenuItem from "./menu-item";
import { Icons } from "./icons";
import Header from "./header";
import { SideNavToggleBtn } from "./side-nav-toggle-btn";
import { useSidebarMediaQuery } from "@/hooks/useSidebarMediaQuery";
import { useHandleClickOutside } from "@/hooks/useHandleClickOutside";
import { SideNavbar } from "@/utils/types";

interface SideNavProps {
  children: React.ReactNode;
  navBar: SideNavbar[];
}

const SideNav = ({ navBar, children }: SideNavProps) => {
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const { isSmallScreen, sidebarOpen, setSidebarOpen } = useSidebarMediaQuery(
    "(min-width: 1100px)"
  );

  useHandleClickOutside(
    sideNavRef as RefObject<HTMLDivElement>,
    isSmallScreen,
    () => setSidebarOpen(false)
  );
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
        <div className="flex bg-background flex-col gap-4 w-[18rem] h-full">
          {/* Logo */}
          <div className="flex gap-4 items-center min-w-[8rem] h-16 p-4 border-b border-muted-background hidden sm:flex">
            <div className="w-full flex justify-between items-center text-xl font-bold">
              {/* Aleracare */}
              <SideNavToggleBtn
                toggleCollapse={toggleCollapse}
                collapsed={sidebarOpen}
              >
                <Icons.panelLeftClose className="h-5 w-5" />
              </SideNavToggleBtn>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col px-5 flex-grow">
            <div className="h-16 flex items-center bg-red-400 sm:hidden">
              <SideNavToggleBtn
                toggleCollapse={toggleCollapse}
                collapsed={sidebarOpen}
                className={clsx({ hidden: !sidebarOpen })}
              >
                <Icons.panelLeftClose className="h-5 w-5" />
              </SideNavToggleBtn>
            </div>

            {navBar.map((category, idx) => (
              <div key={idx} className="mt-4">
                <p className="px-2 mb-2 text-sm font-medium ui-text text-foreground">
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

          <p className="text-sm font-normal m-auto p-4 tracking-wide"></p>
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
