import SideNav from "@/components/side-nav";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideNav>{children}</SideNav>;
}
