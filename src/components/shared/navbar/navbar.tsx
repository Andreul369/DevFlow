import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './mobile-nav';
import GlobalSearch from '../search/global-search';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui';

const ThemeToggle = dynamic(() => import('@/components/shared/navbar/theme-toggle'), {
  ssr: false,
  loading: () => (
    <Button
      variant='ghost'
      size='sm'
      className='gap-1 px-2 text-lg font-semibold md:text-base'
    >
      <div className='size-6 animate-pulse rounded-full bg-muted-foreground/70' />
      <span className='w-14 animate-pulse rounded bg-muted-foreground/70 capitalize'>
        &nbsp;
      </span>
    </Button>
  ),
});

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full gap-5 p-6 shadow-sm dark:shadow-none sm:px-12'>
      <Link href='/' className='flex items-center gap-1'>
        <Image src='/assets/images/site-logo.svg' width={23} height={23} alt='DevFlow' />

        <p className='text-2xl font-bold max-sm:hidden'>
          Dev <span className='text-primary'>Overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className='flex-between gap-5'>
        <ThemeToggle />
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
