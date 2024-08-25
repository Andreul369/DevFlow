import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HomeLoading = () => {
  return (
    <section>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='text-3xl'>All Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-12 px-4 py-3'>Ask a Question</Button>
        </Link>
      </div>

      <div className='mb-12 mt-11 flex flex-wrap items-center justify-between gap-5'>
        <Skeleton className='h-14 flex-1' />
        <div className='hidden max-md:block'>
          <Skeleton className='h-14 w-28' />
        </div>
      </div>

      <div className='my-10 hidden flex-wrap gap-6 md:flex'>
        <Skeleton className='h-10 w-36' />
        <Skeleton className='h-10 w-36' />
        <Skeleton className='h-10 w-36' />
        <Skeleton className='h-10 w-36' />
      </div>

      <div className='flex flex-col gap-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className='h-48 w-full rounded-xl' />
        ))}
      </div>
    </section>
  );
};

export default HomeLoading;
