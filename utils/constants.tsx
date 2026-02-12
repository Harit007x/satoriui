import { Icons } from "@/components/icons";
import { SideNavbar } from "./types";

const prefix: string = "/components";

export const ComponentsNavbar: SideNavbar[] = [
  // {
  //   title: "Hero Sections",
  //   items: [
  //     {
  //       title: "Rolling Text",
  //       path: `${prefix}/rolling-text`,
  //       icon: <Icons.home width="16" height="16" />,
  //     },
  //   ],
  // },
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
      {
        title: "Security Card",
        path: `${prefix}/security-card`,
        icon: <Icons.shield width="16" height="16" />,
      },
    ],
  },
  {
    title: "UI",
    items: [
      {
        title: "Sroll Tracker",
        path: `${prefix}/scroll-tracker`,
        icon: <Icons.scroll width="16" height="16" />,
      },
      {
        title: "Pro Button",
        path: `${prefix}/pro-button`,
        icon: <Icons.pill width="16" height="16" />,
      },
    ],
  },
  {
    title: "Text Animations",
    items: [
      {
        title: "Typewriter Loop",
        path: `${prefix}/typewriter-loop`,
        icon: <Icons.typeOutline width="16" height="16" />,
      },
    ],
  },
];
