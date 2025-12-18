import SideNav from "@/components/side-nav";
import { ComponentsNavbarItems } from "@/utils/constants";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideNav sidenavItems={ComponentsNavbarItems}>{children}</SideNav>;
}
