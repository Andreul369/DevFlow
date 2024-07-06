'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';

import QuestionCard from '../cards/question-card';
import NoResult from './no-result';
import { useSearchParams } from 'next/navigation';
import { getQuestions, getRecommendedQuestions } from '@/lib/actions/question.action';
import { IQuestion } from '@/database/question.model';

interface Props {
  initialAnswers: IQuestion[];
  userId: string;
  isNext: boolean;
}

const AllQuestionsInfiniteScroll = ({ initialQuestions, userId, isNext }: Props) => {
  const [allQuestions, setAllQuestions] = useState(initialQuestions);
  const [isNextPage, setIsNextPage] = useState(isNext);
  const pageRef = useRef(1);
  const [ref, inView] = useInView();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');
  const query = searchParams.get('query');

  useEffect(() => {
    const loadMore = async () => {
      const next = pageRef.current + 1;

      if (filter === 'recommended') {
        if (userId) {
          const { questions: newQuestions, isNext } = await getRecommendedQuestions({
            userId,
            searchQuery: query,
            page: next,
          });

          setAllQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
          setIsNextPage(isNext);
          pageRef.current = next;
        } else {
          // TODO: Fix this
          const result = {
            questions: [],
            isNext: false,
          };
        }
      } else {
        const { questions: newQuestions, isNext } = await getQuestions({
          searchQuery: query,
          filter,
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
  }, [inView]);

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
