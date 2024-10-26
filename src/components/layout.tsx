import { ReactNode, useState } from 'react';
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    
  return (
    <div>
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>
    </div>
  );
}