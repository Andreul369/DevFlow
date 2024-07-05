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
  questionId,
  user,
  isNext,
  filter,
}: Props) => {
  const [allQuestions, setAllQuestions] = useState(initialQuestions);
  const [isNextPage, setIsNextPage] = useState(isNext);

  const pageRef = useRef(1);

  const [ref, inView] = useInView();

  useEffect(() => {
    const loadMore = async () => {
      const next = pageRef.current + 1;

      const { answers: newAnswers, isNext } = await getAnswers({
        questionId,
        page: next,
        sortBy: filter,
      });

      if (allQuestions?.length) {
        setAllQuestions((prevAnswers) => [...prevAnswers, ...newAnswers]);
        setIsNextPage(isNext);
        pageRef.current = next;
      }
    };
    if (inView) {
      loadMore();
    }
  }, [inView]);

  useEffect(() => {
    const filterAnswers = async () => {
      pageRef.current = 1;

      const { answers: newAnswers, isNext } = await getAnswers({
        questionId,
        page: pageRef.current,
        sortBy: filter,
      });

      setAllQuestions(newAnswers);
      setIsNextPage(isNext);
    };
    filterAnswers();
  }, [filter]);

  return (
    <>
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
    </>
  );
};

export default AllQuestionsInfiniteScroll;
