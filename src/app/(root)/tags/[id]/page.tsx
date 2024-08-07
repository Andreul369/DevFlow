import React from 'react';
import { getQuestionsByTagId } from '@/lib/actions/tag.action';
import NoResult from '@/components/shared/no-result';
import QuestionCard from '@/components/cards/question-card';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { URLProps } from '@/types';

const TagPage = async ({ params, searchParams }: URLProps) => {
  const { tagTitle, questions } = await getQuestionsByTagId({
    tagId: params.id,
    searchQuery: searchParams.q,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>{tagTitle}</h1>

      <div className='mt-11 w-full'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search tag questions'
          otherClasses='flex-1'
        />
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question: any) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title='There’s no tag question saved to show'
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

export default TagPage;
