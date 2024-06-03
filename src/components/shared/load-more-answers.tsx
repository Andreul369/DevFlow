'use client';

import React, { useEffect, useState, useTransition } from 'react';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import Link from 'next/link';
import Image from 'next/image';
import { getTimestamp } from '@/lib/utils';
import ParseHTML from './parse-html';
import Votes from './votes';
import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';
import { Button } from '../ui/button';
import { getAnswers } from '@/lib/actions/answer.action';

interface Props {
  questionId: string;
  userId: string;
  filter?: string;
}

const LoadMoreAnswers = ({
  initialAnswers,
  questionId,
  userId,
  filter,
  isNext,
}: Props) => {
  const [allAnswers, setAllAnswers] = useState(initialAnswers);
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(isNext);
  const [ref, inView] = useInView();

  const loadMoreAnswers = async () => {
    const next = page + 1;

    const { answers: newAnswers, isNext } = await getAnswers({
      questionId,
      page: next,
      sortBy: filter,
    });

    if (allAnswers?.length) {
      setPage(next);
      setAllAnswers((prevAnswers: any) => [
        ...(prevAnswers?.length ? prevAnswers : []),
        ...newAnswers,
      ]);
      setIsNextPage(isNext);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreAnswers();
    }
  }, [inView]);

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

export default LoadMoreAnswers;
