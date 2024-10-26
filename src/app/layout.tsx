import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: "FUSE",
  description: "RoboCup Rescue Team TU Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className='bg-colors-grey_light'>
     <Header></Header>
     <main>{children}</main>
     <Footer></Footer>
     </body>
    </html>
  );
}