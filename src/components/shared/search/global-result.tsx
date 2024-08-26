'use client';

import React, { useEffect, useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import GlobalFilters from './global-filters';
import { globalSearch } from '@/lib/actions/general.action';

const GlobalResult = () => {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([
    { type: 'question', id: 1, title: 'Next.js question' },
    { type: 'tag', id: 1, title: 'Nextjs' },
    { type: 'user', id: 1, title: 'jsm' },
  ]);

  const global = searchParams.get('global');
  const type = searchParams.get('type');

  useEffect(() => {
    const fetchResult = async () => {
      setResult([]);
      setIsLoading(true);

      try {
        // Everything | Everywhwere | All at once
        // Global Search
        const res = await globalSearch({ query: global, type });
        setResult(JSON.parse(res));
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    if (global) {
      fetchResult();
    }
  }, [global, type]);

  const renderLink = (type: string, id: string) => {
    switch (type) {
      case 'question':
        return `/question/${id}`;
      case 'answer':
        return `/question/${id}`;
      case 'user':
        return `/profile/${id}`;
      case 'tag':
        return `/tags/${id}`;
      default:
        return '/';
    }
  };

  return (
    <div className='absolute top-full z-10 mt-3 w-full rounded-xl bg-embark py-5 shadow-sm'>
      <GlobalFilters />
      <div className='my-5 h-px' />

      <div className='space-y-5'>
        <p className='px-5 font-semibold'>Top Match</p>

        {isLoading ? (
          <div className='flex-center flex-col px-5'>
            <ReloadIcon className='my-2 size-10 animate-spin' />
            <p>Browsing the entire database</p>
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            {result.length > 0 ? (
              result.map((item: any, index: number) => (
                <Link
                  href={renderLink(item.type, item.id)}
                  key={item.type + item.id + index}
                  // TODO: Add a hover color here
                  className='flex w-full cursor-pointer items-start gap-3 px-5 py-2.5'
                >
                  <Image
                    src='/assets/icons/tag.svg'
                    alt='tags'
                    width={18}
                    height={18}
                    className='mt-1 object-contain'
                  />

                  <div className='flex flex-col'>
                    <p className='text-sm'>{item.title}</p>
                    <p className='mt-1 text-xs font-bold capitalize'>{item.type}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className='flex-center flex-col px-5'>
                <p className='px-5 py-2.5'>Oops, no results found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalResult;
