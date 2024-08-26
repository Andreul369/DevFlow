'use client';

import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { SignedOut, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const NavContent = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  return (
    <section className='flex h-full flex-col gap-6 pt-16'>
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
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                // TODO : should text-white be changed?
                isActive ? 'primary-gradient rounded-lg text-white' : ''
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              {item.icon}
              <p className={`${isActive ? 'font-bold' : 'font-normal'}`}>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/assets/icons/hamburger.svg'
          width={36}
          height={36}
          alt='Menu'
          className='sm:hidden'
        />
      </SheetTrigger>
      <SheetContent side='left' className='no-scrollbar overflow-y-auto border-none'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/assets/images/site-logo.svg'
            width={23}
            height={23}
            alt='DevFlow'
          />

          <p className='text-2xl font-bold'>
            Dev <span className='text-primary'>Overflow</span>
          </p>
        </Link>
        <div className='no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto'>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className='flex flex-col gap-3'>
              <SheetClose asChild>
                <Link href='/sign-in'>
                  <Button className='min-h-10 w-full rounded-lg bg-embark px-4 py-3 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6]'>
                    <Image
                      src='/assets/icons/account.svg'
                      alt='login'
                      width={18}
                      height={18}
                      className='mr-4 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6] lg:hidden'
                    />
                    Log In
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href='/sign-up'>
                  <Button className='min-h-10 w-full rounded-lg border bg-embark px-4 py-3 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6]'>
                    <Image
                      src='/assets/icons/sign-up.svg'
                      alt='sign up'
                      width={18}
                      height={18}
                      className='mr-4 text-[#363636] shadow-none hover:text-[#F6F6F6] dark:text-[#F6F6F6] lg:hidden'
                    />
                    Sign up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
