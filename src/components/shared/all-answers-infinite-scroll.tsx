'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useOptimistic,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTimestamp } from '@/lib/utils';
import ParseHTML from './parse-html';
import Votes from './votes';
import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';
// import {produce} from "immer";

import { getAnswers } from '@/lib/actions/answer.action';

interface Props {
  initialAnswers: any[];
  questionId: string;
  userId: string;
  filter?: string;
  isNext?: boolean;
}

const AllAnswersInfiniteScroll = ({
  initialAnswers,
  questionId,
  userId,
  filter,
  isNext,
}: Props) => {
  const [allAnswers, setAllAnswers] = useState(initialAnswers);
  const [isNextPage, setIsNextPage] = useState(isNext);

  const handleItemUpdate = useCallback((itemId: string, action: string) => {
    setAllAnswers((prevState) => {
      const findIndex = prevState.findIndex((item) => item._id === itemId);

      if (findIndex > -1) {
        const newState = [...prevState];
        console.log('newState[findIndex]===', newState[findIndex]);
        if (action === 'upvote') {
          newState[findIndex] = {
            ...newState[findIndex],
            upvotes: newState[findIndex].upvotes.includes(itemId)
              ? newState[findIndex].upvotes.filter((id: string) => id !== itemId)
              : [...newState[findIndex].upvotes, itemId],
            downvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].downvotes.filter((id: string) => id !== itemId)
              : newState[findIndex].downvotes,
          };
          return newState;
        } else {
          newState[findIndex] = {
            ...newState[findIndex],
            upvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].upvotes.filter((id: string) => id !== itemId)
              : newState[findIndex].upvotes,
            downvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].downvotes.filter((id: string) => id !== itemId)
              : [...newState[findIndex].downvotes, itemId],
          };
          return newState;
        }
      }

      return prevState;
    });
  }, []);

  const pageRef = useRef(1);

  const [ref, inView] = useInView();

  useEffect(() => {
    const loadMoreAnswers = async () => {
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
      loadMoreAnswers();
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

      setAllAnswers(newAnswers);
      setIsNextPage(isNext);
    };
    filterAnswers();
  }, [filter]);

  return (
    <>
      {allAnswers?.map((answer) => (
        <article key={answer._id} className='light-border border-b py-10'>
          <div className='mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
            <Link
              href={`/profile/${answer.author.clerkId}`}
              className='flex flex-1 items-start gap-1 sm:items-center'
            >
              <Image
                src={answer.author.picture}
                alt='profile picture'
                width={18}
                height={18}
                className='rounded-full object-cover max-sm:mt-0.5'
              />
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <p className='body-semibold text-dark300_light700'>
                  {answer.author.name}
                </p>
                <p className='small-regular text-dark400_light500 mt-0.5 line-clamp-1'>
                  <span className='mx-0.5 max-sm:hidden'>•</span>
                  answered {getTimestamp(answer.createdAt)}
                </p>
              </div>
            </Link>

            <div className='flex justify-end'>
              <Votes
                type='Answer'
                itemId={answer._id}
                userId={userId}
                upvotes={answer.upvotes.length}
                hasupVoted={answer.upvotes.includes(userId)}
                downvotes={answer.downvotes.length}
                hasdownVoted={answer.downvotes.includes(userId)}
                onItemUpdate={handleItemUpdate}
                // setAllAnswers={setAllAnswers as any}
              />
            </div>
          </div>

          <ParseHTML data={answer.content} />
        </article>
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
