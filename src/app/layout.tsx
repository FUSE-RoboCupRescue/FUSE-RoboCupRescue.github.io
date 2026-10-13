import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "FUSE — RoboCup Rescue Team TU Berlin",
    template: "%s — FUSE RoboCup Rescue",
  },
  description:
    "FUSE is a student team from TU Berlin designing and building tracked rescue robots for the RoboCup Rescue League.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "FUSE — RoboCup Rescue Team TU Berlin",
    description: "Student team from TU Berlin building rescue robots for RoboCup Rescue.",
    images: ["/img/robot4-1600.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16181b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/inter-400.woff" as="font" type="font/woff" crossOrigin="" />
        <link rel="preload" href="/fonts/inter-display-700.woff" as="font" type="font/woff" crossOrigin="" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
