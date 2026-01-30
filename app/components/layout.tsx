import { RouteLoader } from "@/components/route-loader";
import SideNav from "@/components/side-nav";
import { ComponentsNavbar } from "@/utils/constants";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RouteLoader height={3} />
      <SideNav navBar={ComponentsNavbar}>{children}</SideNav>
    </>
  );
}
