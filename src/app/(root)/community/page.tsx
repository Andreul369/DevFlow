import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { UserFilters } from '@/constants/filters';
import Filter from '@/components/shared/filter';
import { getAllUsers } from '@/lib/actions/user.action';
import Link from 'next/link';
import { SearchParamsProps } from '@/types';

import { Metadata } from 'next';
import GlobalSearch from '@/components/shared/search/global-search';
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: 'Community | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const CommunityPage = async ({ searchParams }: SearchParamsProps) => {
  const UserCard = dynamic(() => import('@/components/cards/user-card'), { ssr: false });

  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const { users } = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
      </div>

      <h1 className='pt-16 text-3xl font-bold'>All Users</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/community'
          iconPosition='left'
          placeholder='Search by username...'
          otherClasses='flex-1'
        />

        <Filter
          filters={UserFilters}
          otherClasses='min-h-12 sm:min-w-40'
          containerClasses='flex'
        />
      </div>

      <section className='mt-12 flex flex-wrap gap-4'>
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className='mx-auto max-w-4xl text-center'>
            <p>No users yet</p>
            <Link href='/sign-up' className='mt-2 font-bold'>
              Join to be the first!
            </Link>
          </div>
        )}
      </section>

      <div className='mt-10'>
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={isNext}
        /> */}
      </div>
    </>
  );
};

export default CommunityPage;
