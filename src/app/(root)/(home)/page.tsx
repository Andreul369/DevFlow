import Link from 'next/link';
import Filter from '@/components/shared/filter';
import LocalSearchbar from '@/components/shared/search/local-searchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/home-filters';
import QuestionCard from '@/components/cards/question-card';

import NoResult from '@/components/shared/no-result';

const questions = [
  {
    _id: 1,
    title: 'Cascading Deletes in SQLAlchemy?',
    tags: [
      { _id: 1, name: 'python' },
      { _id: 2, name: 'sqlalchemy' },
    ],
    author: { _id: 101, name: 'John Doe', picture: 'path/to/picture.jpg' },
    upvotes: 10,
    views: 100,
    answers: [{}, {}, {}], // Assuming 3 placeholder answer objects
    createdAt: new Date('2021-08-01T12:00:00.000Z'),
  },
  {
    _id: 2,
    title: 'How do I use express as a custom server in Next.JS?',
    tags: [
      { _id: 3, name: 'express' },
      { _id: 4, name: 'next.js' },
    ],
    author: { _id: 102, name: 'Jane Smith', picture: 'path/to/picture2.jpg' },
    upvotes: 15,
    views: 150,
    answers: [{}, {}], // Assuming 2 placeholder answer objects
    createdAt: new Date('2021-08-02T13:00:00.000Z'),
  },
  {
    _id: 3,
    title: 'How to Perfectly Center a Div with Tailwind CSS?',
    tags: [
      { _id: 5, name: 'react.js' },
      { _id: 6, name: 'tailwind' },
    ],
    author: { _id: 103, name: 'Alice Johnson', picture: 'path/to/picture3.jpg' },
    upvotes: 20,
    views: 200,
    answers: [{}, {}, {}, {}], // Assuming 4 placeholder answer objects
    createdAt: new Date('2021-08-03T14:30:00.000Z'),
  },
];

export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />

        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>

      <HomeFilters />

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
            title="There's no questions to show"
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion.
          our query could be the next big thing others learn from. Get involved! 💡'
            link='/ask-question'
            linkText='Ask a Question'
          />
        )}
      </div>
    </>
  );
}
