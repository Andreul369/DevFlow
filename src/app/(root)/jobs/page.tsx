import React from 'react';

import LocalSearchbar from '@/components/shared/search/local-searchbar';

import LocationFilter from '@/components/shared/location-filter';
import { getQuestions } from '@/lib/actions/question.action';
import { SearchParamsProps } from '@/types';
import JobCard from '@/components/cards/job-card';
import NoResult from '@/components/shared/no-result';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const JobsPage = async ({ searchParams }: SearchParamsProps) => {
  const result = await getQuestions({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='text-3xl font-bold'>Jobs</h1>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/community'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Job Title, Company, or Keywords'
          otherClasses='flex-1'
        />

        <LocationFilter />
        {/* otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='flex' */}
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        {result.questions.length > 0 ? (
          result.questions.map((question: any) => (
            <JobCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no active job posts at the moment."
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion.
          our query could be the next big thing others learn from. Get involved! 💡'
            link='/'
            linkText='Back to home'
          />
        )}
      </div>

      <div className='mt-10'>
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={isNext}
        /> */}
      </div>
    </>
  );
};

export default JobsPage;
