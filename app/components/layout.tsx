import SideNav from "@/components/side-nav";
import { ComponentsNavbar } from "@/utils/constants";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideNav navBar={ComponentsNavbar}>{children}</SideNav>;
}
