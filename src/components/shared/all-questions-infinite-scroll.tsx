'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';
import { getAnswers } from '@/lib/actions/answer.action';

import { IAnswer } from '@/database/answer.model';
import QuestionCard from '../cards/question-card';
import NoResult from './no-result';

interface Props {
  initialAnswers: IAnswer[];
  questionId: string;
  user: string;
  isNext: boolean;
  filter?: string;
  question: string;
  totalAnswers: number;
}

const AllQuestionsInfiniteScroll = ({
  initialQuestions,
  user,
  isNext,
  filter,
}: Props) => {
  const [allQuestions, setAllQuestions] = useState(initialQuestions);
  const [isNextPage, setIsNextPage] = useState(isNext);
  const pageRef = useRef(1);

  const [ref, inView] = useInView();

  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
      {allQuestions.length > 0 ? (
        allQuestions.map((question) => (
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

      {isNextPage && (
        <div className='mt-11 flex w-full items-center justify-center' ref={ref}>
          <Icons.Spinner className='size-9 animate-spin' />
        </div>
      )}
    </div>
  );
};

export default AllQuestionsInfiniteScroll;
