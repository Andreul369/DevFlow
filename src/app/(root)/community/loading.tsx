import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CommunityLoading = () => {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Users</h1>
      </div>

      <div className='mb-12 mt-11 flex flex-wrap items-center justify-between gap-5'>
        <Skeleton className='h-14 flex-1' />
        <div className='hidden max-md:block'>
          <Skeleton className='h-14 w-28' />
        </div>
      </div>
    </>
  );
};

export default CommunityLoading;
