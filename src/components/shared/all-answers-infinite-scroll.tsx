'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';
import { getAnswers } from '@/lib/actions/answer.action';
import AnswerCard from './answer-card';
import AnswerForm from '../forms/answer-form';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import { IAnswerWithId } from '@/database/answer.model';
import { IQuestionWithId } from '@/database/question.model';

interface Props {
  initialAnswers: IAnswerWithId[];
  questionId: string;
  user: string;
  isNext: boolean;
  filter?: string;
  question: IQuestionWithId;
  totalAnswers: number;
}

const AllAnswersInfiniteScroll = ({
  initialAnswers,
  questionId,
  user,
  isNext,
  filter,
  question,
  totalAnswers,
}: Props) => {
  const [allAnswers, setAllAnswers] = useState(initialAnswers);
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

      if (allAnswers?.length) {
        setAllAnswers((prevAnswers) => [...prevAnswers, ...newAnswers]);
        setIsNextPage(isNext);
        pageRef.current = next;
      }
    };
    if (inView) {
      loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    const filterAnswers = async () => {
      pageRef.current = 1;

      const { answers: newAnswers, isNext } = await getAnswers({
        questionId,
        page: pageRef.current,
        sortBy: filter,
      });

      setAllAnswers(newAnswers);
      setIsNextPage(isNext);
    };

    filterAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <AnswerForm
        question={question}
        questionId={questionId}
        user={user}
        onAnswerSubmit={setAllAnswers}
      />

      <div className='mt-11'>
        <div className='flex items-center justify-between'>
          <h3 className='primary-text-gradient'>{totalAnswers} Answers</h3>

          <Filter filters={AnswerFilters} />
        </div>
      </div>

      {allAnswers.map((answer) => (
        <AnswerCard
          key={answer._id}
          answer={answer}
          userId={user._id}
          // prevent Hydration warning when page is refreshed and comment are
          // left for a few seconds.
          suppressHydrationWarning
        />
      ))}

      {isNextPage && (
        <div className='mt-11 flex w-full items-center justify-center' ref={ref}>
          <Icons.Spinner className='size-9 animate-spin' />
        </div>
      )}
    </>
  );
};

export default AllAnswersInfiniteScroll;
