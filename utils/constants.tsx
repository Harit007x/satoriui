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
      {
        title: "Stacked Cards",
        path: `${prefix}/stacked_cards`,
        icon: <Icons.home width="16" height="16" />,
      },
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
      {
        title: "Gradient",
        path: `${prefix}/gradient`,
        icon: <Icons.home width="16" height="16" />,
      },
    ],
  },
  {
    title: "UI Elements",
    items: [
      {
        title: "Button",
        path: `${prefix}/button`,
        icon: <Icons.home width="16" height="16" />,
      },
      {
        title: "Backgorunds",
        path: `${prefix}/backgrounds`,
        icon: <Icons.home width="16" height="16" />,
      },
      {
        title: "Showcase",
        path: `${prefix}/showcase`,
        icon: <Icons.pill width="16" height="16" />,
      },
    ],
  },
  {
    title: "Patient Workspace",
    items: [
      {
        title: "Clinical Conditions",
        path: "/clinical-conditions",
        icon: <Icons.hospital width="16" height="16" />,
      },
      {
        title: "Notes",
        path: "/patient-notes",
        icon: <Icons.notebookPenIcon width="16" height="16" />,
      },
      {
        title: "Documents",
        path: "/documents",
        icon: <Icons.post width="16" height="16" />,
      },
      {
        title: "Messages",
        path: "/messages",
        indicator: true,
        icon: <Icons.messageSquare width="16" height="16" />,
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        title: "In-Bound",
        path: "/inBound",
        icon: <Icons.fileInput width="16" height="16" />,
      },
      {
        title: "Out-Bound",
        path: "/outBound",
        icon: <Icons.fileOutput width="16" height="16" />,
      },
      {
        title: "Rx-Archive",
        path: "/rxArchive",
        icon: <Icons.archive width="16" height="16" />,
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        title: "Settings",
        path: "/settings",
        icon: <Icons.settings width="16" height="16" />,
      },
      {
        title: "Projects",
        path: "/projects",
        icon: <Icons.folder width="16" height="16" />,
        submenu: true,
        subMenuItems: [
          { title: "All", path: "/projects" },
          { title: "Web Design", path: "/projects/web-design" },
          { title: "Graphic Design", path: "/projects/graphic-design" },
        ],
      },
    ],
  },
];
