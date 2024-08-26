import Link from 'next/link';
import Filter from '@/components/shared/filter';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/home-filters';
import { getQuestions, getRecommendedQuestions } from '@/lib/actions/question.action';
import { SearchParamsProps } from '@/types';

import { auth } from '@clerk/nextjs';
import { Metadata } from 'next';
import InfiniteScrollQuestions from '@/components/shared/infinite-scroll-questions';
import GlobalSearch from '@/components/shared/search/global-search';
import MobileNav from '@/components/shared/navbar/mobile-nav';

export const metadata: Metadata = {
  title: 'Home | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default async function HomePage({ searchParams }: SearchParamsProps) {
  const { userId } = auth();

  let result;

  if (searchParams?.filter === 'recommended') {
    if (userId) {
      result = await getRecommendedQuestions({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        questions: [],
        isNext: false,
      };
    }
  } else {
    result = await getQuestions({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

  return (
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
        <MobileNav />
      </div>
      <div className='flex w-full flex-col-reverse justify-between gap-4 pt-1 sm:flex-row sm:items-center lg:pt-16'>
        <h1 className='text-3xl font-bold'>All Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-12 px-4 py-3'>Ask a Question</Button>
        </Link>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />

        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-12 sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>

      <HomeFilters />

      <InfiniteScrollQuestions
        initialQuestions={result.questions}
        isNext={result.isNext}
        userId={userId || ''}
      />
    </>
  );
}
