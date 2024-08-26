import React from 'react';
import Filter from '@/components/shared/filter';
import NoResult from '@/components/shared/no-result';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { QuestionFilters } from '@/constants/filters';
import QuestionCard from '@/components/cards/question-card';
import { getSavedQuestions } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { SearchParamsProps } from '@/types';

import { Metadata } from 'next';
import GlobalSearch from '@/components/shared/search/global-search';

export const metadata: Metadata = {
  title: 'Collection | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const CollectionPage = async ({ searchParams }: SearchParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const { questions } = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
      </div>

      <h1 className='pt-16 text-3xl font-bold'>Saved Questions</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />

        <Filter filters={QuestionFilters} otherClasses='min-h-12 min-w-40' />
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question: any) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title='There’s no question saved to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Your query could be the next big thing others learn from. Get involved! 💡'
            link='/ask-question'
            linkText='Ask a Question'
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

export default CollectionPage;
