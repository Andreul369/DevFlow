import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CommunityLoading = () => {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='text-3xl font-bold'>All Users</h1>
      </div>

      <div className='mb-12 mt-11 flex flex-wrap items-center justify-between gap-5'>
        <Skeleton className='h-14 flex-1' />
        <div className='hidden max-md:block'>
          <Skeleton className='h-14 w-28' />
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className='h-60 w-full rounded-2xl sm:w-[260px]' />
        ))}
      </div>
    </>
  );
};

export default CommunityLoading;
