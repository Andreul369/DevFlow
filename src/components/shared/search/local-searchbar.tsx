'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import * as Icons from '@/components/ui/icons';
interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [search, setSearch] = useState(query || '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['q'],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, route, pathname, router, searchParams, query]);

  return (
    <div
      className={`relative flex min-h-12 grow items-center gap-4 rounded-xl bg-embark px-4 ${otherClasses}`}
    >
      {iconPosition === 'left' && (
        <Icons.Search className='size-7 cursor-pointer text-muted-foreground' />
      )}

      <Input
        type='text'
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='no-focus border-none bg-embark shadow-none outline-none'
      />

      {iconPosition === 'right' && (
        <Icons.Search className='size-7 cursor-pointer text-muted-foreground' />
      )}
    </div>
  );
};

export default LocalSearchbar;
