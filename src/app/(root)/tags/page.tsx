import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { TagFilters } from '@/constants/filters';
import Filter from '@/components/shared/filter';
import Link from 'next/link';
import NoResult from '@/components/shared/no-result';
import { getAllTags } from '@/lib/actions/tag.action';
import { SearchParamsProps } from '@/types';

import { Metadata } from 'next';
import GlobalSearch from '@/components/shared/search/global-search';

export const metadata: Metadata = {
  title: 'All Tags | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

// TODO: This doesn't have infinite scroll

const TagsPage = async ({ searchParams }: SearchParamsProps) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const { tags } = await getAllTags({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
      </div>

      <h1 className='pt-1 text-3xl font-bold lg:pt-16'>Tags</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/tags'
          iconPosition='left'
          placeholder='Search for tags'
          otherClasses='flex-1'
        />

        <Filter
          filters={TagFilters}
          otherClasses='min-h-12 sm:min-w-40'
          containerClasses='flex'
        />
      </div>

      <section className='mt-12 flex flex-wrap gap-4'>
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Link key={tag._id} href={`/tags/${tag._id}`}>
              <article className='flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]'>
                <div className='w-fit rounded-sm px-5 py-1.5'>
                  <p className='font-semibold'>{tag.name}</p>
                </div>

                <p className='mt-3.5 text-xs'>
                  <span className='primary-text-gradient mr-2.5 font-semibold'>
                    {tag.questions.length}+
                  </span>
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title='No Tags Found'
            description='It looks like there are no tags found'
            link='/ask-question'
            linkText='Ask a Question'
          />
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

export default TagsPage;
