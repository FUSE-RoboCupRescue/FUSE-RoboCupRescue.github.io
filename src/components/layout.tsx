import { ReactNode, useState } from 'react';
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className='bg-colors-grey_light'>
     <Header></Header>
     {children}
     <Footer></Footer>
     </body>
    </html>
  );
}