import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/header'
import Footer from '../components/footer'
import Image from "next/image";

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
     <body className='bg-colors-white'>
     <div className='flex justify-between bg-colors-grey_dark py-5' id="banner">
        <Image 
        src="./banner_left.png"
        width={500}
        height={200}
        className="max-h-[50px] max-w-[200px] sm:max-h-[100px] sm:max-w-[250px] md:max-w-[300px] lg:max-h-[200px] lg:max-w-[500px] object-contain top-0 left-0"
        alt="banner_left" />

        <Image 
        src="./banner_right.png"
        width={350}
        height={200}
        className="max-h-[50px] max-w-[150px] sm:max-h-[100px] sm:max-w-[200px] md:max-w-[250px] lg:max-h-[200px] lg:max-w-[350px] object-contain top-0 left-0"
        alt="banner_right" />
      </div>
     <Header></Header>
     <main>{children}</main>
     <Footer></Footer>
     </body>
    </html>
  );
}