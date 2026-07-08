import Link from 'next/link';
import { ReactNode } from 'react';
import {  ChevronRight, Leaf } from 'lucide-react';
import { Button } from '../ui/button';
import Header from './Header';
import Logo from '../ui/logo';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col  min-h-screen justify-center items-center w-full overflow-x-hidden">
     <Header />

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}