import React from 'react';
import HomeFilters from '@/components/home/home-filters';
import Filter from '@/components/shared/filter';
import NoResult from '@/components/shared/no-result';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { QuestionFilters } from '@/constants/filters';
import { getQuestions } from '@/lib/actions/question.action';
import QuestionCard from '@/components/cards/question-card';

const CollectionPage = async () => {
  const { questions } = await getQuestions({});

  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>Saved Questions</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />

        <Filter filters={QuestionFilters} otherClasses='min-h-[56px] sm:min-w-[170px]' />
      </div>

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
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
            title='There’s no question saved to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Your query could be the next big thing others learn from. Get involved! 💡'
            link='/ask-question'
            linkText='Ask a Question'
          />
        )}
      </div>
    </>
  );
};

export default CollectionPage;