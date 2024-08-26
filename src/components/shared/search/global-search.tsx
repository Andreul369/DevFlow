'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import GlobalResult from './global-result';
import * as Icons from '@/components/ui/icons';
const GlobalSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchContainerRef = useRef(null);

  const query = searchParams.get('q');

  const [search, setSearch] = useState(query || '');
  const [isOpen, setIsOpen] = useState(false);

  // 👇 close the global result modal
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        searchContainerRef.current &&
        // @ts-ignore
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearch('');
      }
    };

    // 👇 this setIsOpen closes the GlobarResult after you change the pathname
    // (after you click on smth from the results)
    setIsOpen(false);

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
    // TODO: check this dep and see which one has better UX
    // 👇 This dep. is needed too for the globalResult dialog close after click
    //   }, [pathname]);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'global',
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (query) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['global', 'type'],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, pathname, router, searchParams, query]);

  return (
    <div className='relative w-full max-lg:hidden' ref={searchContainerRef}>
      <div className='relative flex min-h-12 grow items-center gap-1 rounded-xl bg-embark  px-4'>
        <Icons.Search className='size-7 cursor-pointer text-muted-foreground' />

        <Input
          type='text'
          placeholder='Search globally'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);

            if (!isOpen) setIsOpen(true);

            if (e.target.value === '' && isOpen) setIsOpen(false);
          }}
          className='no-focus border-none bg-embark shadow-none outline-none'
        />
      </div>
      {isOpen && <GlobalResult />}
    </div>
  );
};

export default GlobalSearch;
