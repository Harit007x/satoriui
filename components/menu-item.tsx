"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SideNavItem } from "@/utils/types";
import { Icons } from "./icons";

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  if (item.submenu) {
    return (
      <div className="min-w-[10rem]">
        <button
          onClick={toggleSubMenu}
          className={clsx(
            "flex items-center p-2 rounded-md w-full justify-between hover:bg-primary",
            {
              "bg-zinc-100": pathname.includes(item.path),
            }
          )}
        >
          <div className="flex items-center space-x-3">
            {item.icon}
            <span className="font-medium text-sm">{item.title}</span>
          </div>

          <div
            className={clsx("transition-transform", {
              "rotate-180": subMenuOpen,
            })}
          >
            <Icons.chevronDown width={16} height={16} />
          </div>
        </button>

        {subMenuOpen && (
          <div className="ml-5 flex flex-col gap-1">
            {item.subMenuItems?.map((subItem, idx) => (
              <Link
                key={idx}
                href={subItem.path}
                className={clsx(
                  "flex items-center space-x-3 text-sm p-2 px-4 rounded-md",
                  {
                    "bg-primary text-white": isActive(subItem.path),
                    "hover:bg-primary/20": !isActive(subItem.path),
                  }
                )}
              >
                {subItem.icon}
                <span>{subItem.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className={clsx(
        "flex items-center gap-2 min-w-[10rem] p-2 py-2.5 rounded-lg text-sm",
        {
          "bg-primary text-white": isActive(item.path),
          "text-muted-foreground hover:bg-primary/20": !isActive(item.path),
        }
      )}
    >
      {item.icon && (
        <span className="h-4 w-4 shrink-0 flex items-center justify-center">
          {item.icon}
        </span>
      )}
      <span className="leading-4">{item.title}</span>
    </Link>
  );
};

export default MenuItem;
