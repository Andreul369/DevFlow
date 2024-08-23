import LeftSidebar from '@/components/shared/left-sidebar';
import Navbar from '@/components/shared/navbar/navbar';
import RightSidebar from '@/components/shared/right-sidebar';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative'>
      <Navbar />
      <div className='flex'>
        <LeftSidebar />

        <section className='flex min-h-screen flex-1 flex-col bg-base px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>

        <RightSidebar />
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
