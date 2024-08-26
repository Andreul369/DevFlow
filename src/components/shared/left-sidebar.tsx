'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/nextjs';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/shared/navbar/theme-toggle'), {
  ssr: false,
  loading: () => (
    <Button
      variant='ghost'
      size='sm'
      className='mt-3 gap-1 px-2 text-lg font-semibold md:text-base'
    >
      <div className='size-6 animate-pulse rounded-full bg-muted-foreground/70' />
      <span className='w-14 animate-pulse rounded bg-muted-foreground/70 capitalize max-lg:hidden'>
        &nbsp;
      </span>
    </Button>
  ),
});

const LeftSidebar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r bg-surface p-4 max-sm:hidden lg:w-[250px]'>
      <Link href='/' className='flex items-center gap-2 p-3 pt-6'>
        <Image src='/assets/images/site-logo.svg' width={23} height={23} alt='DevFlow' />

        <p className='text-2xl font-bold max-lg:hidden'>
          Dev <span className='text-primary max-lg:hidden'>Overflow</span>
        </p>
      </Link>
      <div className='mt-14 flex flex-1 flex-col gap-3'>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          if (item.route === '/profile') {
            if (userId) {
              item.route = `/profile/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive ? 'primary-gradient rounded-lg text-white' : ''
              }  flex items-center justify-start gap-4 bg-transparent p-3 max-lg:justify-center`}
            >
              {item.icon}
              <p className={`${isActive ? 'font-bold' : 'font-normal'} max-lg:hidden`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Link href='/sign-in'>
            <Button className='min-h-10 w-full rounded-lg bg-embark px-4 py-3 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6]'>
              <Image
                src='/assets/icons/account.svg'
                alt='login'
                width={18}
                height={18}
                className='text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6] lg:hidden'
              />
              <span className='max-lg:hidden'>Log In</span>
            </Button>
          </Link>

          <Link href='/sign-up'>
            <Button className='min-h-10 w-full rounded-lg border bg-embark px-4 py-3 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6]'>
              <Image
                src='/assets/icons/sign-up.svg'
                alt='sign up'
                width={18}
                height={18}
                className='text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6] lg:hidden'
              />
              <span className='max-lg:hidden'>Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>

      <div className='flex-between max-lg:flex-col-reverse max-lg:gap-4'>
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
      </div>
    </section>
  );
};

export default LeftSidebar;
