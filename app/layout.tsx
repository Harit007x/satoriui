import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SatoriUI",
  description:
    "A comprehensive suite of high-fidelity, interactive, accessible and extensible components to use with shadcn/ui.",
  keywords:
    "component library, satoriu, shadcn, react components, tailwindcss, tailwind components, ui components, accessible components, interactive components, extensible components, design system, frontend development, web development, user interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
