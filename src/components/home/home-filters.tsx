'use client';

import { HomePageFilters } from '@/constants/filters';
import React, { useState } from 'react';
import { Button } from '../ui/button';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn, formUrlQuery } from '@/lib/utils';

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState('');

  // TODO: when going to a page with a filter in the url the button does not get colored

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive('');
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: null,
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: item.toLowerCase(),
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className='mt-10 hidden flex-wrap gap-3 md:flex'>
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleTypeClick(item.value)}
          variant='default'
          className={cn(
            'bg-embark text-[#363636] dark:text-[#F6F6F6] hover:text-[#F6F6F6]',
            item.value.toLowerCase() === active && 'bg-primary text-[#F6F6F6]'
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
