import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './mobile-nav';
import GlobalSearch from '../search/global-search';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui';

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full gap-5 p-6 shadow-sm dark:shadow-none sm:px-12'>
      <GlobalSearch />

      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
