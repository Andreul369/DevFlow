'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';

import QuestionCard from '../cards/question-card';
import NoResult from './no-result';
import { useSearchParams } from 'next/navigation';
import { getQuestions, getRecommendedQuestions } from '@/lib/actions/question.action';
import { IQuestionWithId } from '@/database/question.model';
import { useAuth } from '@clerk/nextjs';

interface Props {
  initialQuestions: IQuestionWithId[];
  userId: string;
  isNext: boolean;
}

const InfiniteScrollQuestions = ({ initialQuestions, isNext }: Props) => {
  const { userId } = useAuth();
  const [allQuestions, setAllQuestions] = useState(initialQuestions);
  const [isNextPage, setIsNextPage] = useState(isNext);
  const pageRef = useRef(1);
  const [ref, inView] = useInView();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');
  const query = searchParams.get('q');

  useEffect(() => {
    const loadMore = async () => {
      const next = pageRef.current + 1;

      if (filter === 'recommended') {
        if (userId) {
          const { questions: newQuestions, isNext } = await getRecommendedQuestions({
            userId,
            searchQuery: query || '',
            page: next,
          });

          setAllQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
          setIsNextPage(isNext);
          pageRef.current = next;
        } else {
          setAllQuestions([]);
          setIsNextPage(false);
        }
      } else {
        const { questions: newQuestions, isNext } = await getQuestions({
          searchQuery: query || '',
          filter: filter || '',
          page: next,
        });

        setAllQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
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
    const filterQuestions = async () => {
      pageRef.current = 1;

      if (filter === 'recommended') {
        if (userId) {
          const { questions: newQuestions, isNext } = await getRecommendedQuestions({
            userId,
            searchQuery: query || '',
            page: 1,
          });
          setAllQuestions(newQuestions);
          setIsNextPage(isNext);
        } else {
          setAllQuestions([]);
          setIsNextPage(false);
        }
      } else {
        const { questions: newQuestions, isNext } = await getQuestions({
          searchQuery: query || '',
          filter: filter || '',
          page: 1,
        });

        setAllQuestions(newQuestions);
        setIsNextPage(isNext);
      }
    };

    filterQuestions();
  }, [filter, query, userId]);

  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
      {allQuestions.length > 0 ? (
        allQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
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

export default InfiniteScrollQuestions;
