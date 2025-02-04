import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/header'
import Footer from '../components/footer'
import Image from "next/image";

export const metadata: Metadata = {
  title: "thaigerlabs",
  description: "ThaiGerLabs",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-colors-white'>
        <div className='flex justify-between bg-[rgb(29,29,29)] py-5' id="banner">
        <Image 
          src="./thaigerlabslong.jpeg"
          width={500}
          height={200}
          className="max-h-[50px] max-w-[200px] sm:max-h-[100px] sm:max-w-[250px] md:max-w-[300px] lg:max-h-[200px] lg:max-w-[500px] object-contain top-0 left-0"
          alt="banner_left" />

        </div>
        <Header></Header>
          <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}