import { Icons } from "@/components/icons";
import { SideNavbar } from "./types";

const prefix: string = "/components";

export const ComponentsNavbar: SideNavbar[] = [
  {
    title: "Hero Sections",
    items: [
      {
        title: "Rolling Text",
        path: `${prefix}/rolling-text`,
        icon: <Icons.home width="16" height="16" />,
      },
      // {
      //   title: "Stacked Cards",
      //   path: `${prefix}/stacked_cards`,
      //   icon: <Icons.home width="16" height="16" />,
      // },
    ],
  },
  {
    title: "Backgrounds",
    items: [
      {
        title: "Dotted Modern",
        path: `${prefix}/dotted-modern`,
        icon: <Icons.pill width="16" height="16" />,
      },
      // {
      //   title: "Gradient",
      //   path: `${prefix}/gradient`,
      //   icon: <Icons.home width="16" height="16" />,
      // },
    ],
  },
  {
    title: "Showcases",
    items: [
      {
        title: "Keyboard UI",
        path: `${prefix}/keyboard-ui`,
        icon: <Icons.keyboard width="16" height="16" />,
      },
    ],
  },
];
