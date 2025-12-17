import { JSX } from "react";

export type SideNavItem = {
  title: string;
  path: string;
  indicator?: boolean;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type Error = {
  error: {
    data: {
      message: string;
    };
  };
};
