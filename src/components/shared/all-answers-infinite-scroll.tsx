'use client';

import React, {
  MutableRefObject,
  Ref,
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

import { downvoteAnswer, getAnswers, upvoteAnswer } from '@/lib/actions/answer.action';
import { AnswerVoteParams, GetAnswersParams, QuestionVoteParams } from '../../lib/actions/shared.types';
import { downvoteQuestion, upvoteQuestion } from '../../lib/actions/question.action';

interface Props {
  initialAnswers: any[];
  questionId: string;
  userId: string;
  filter?: string;
  isNext?: boolean;
  onNextPage: (prosp: GetAnswersParams) => void;
  onItemUpdate: (itemId: string, action: string, data: AnswerVoteParams | QuestionVoteParams) => void;
  // inViewRef: MutableRefObject<any>;
}


const AllAnswersInfiniteScroll = ({
  initialAnswers: allAnswers,
  // initialAnswers,
  questionId,
  userId,
  filter,
  isNext,
  onNextPage,
  onItemUpdate,
  // inViewRef,
}: Props) => {
  // const [allAnswers, setAllAnswers] = useState(initialAnswers);
  const [isNextPage, setIsNextPage] = useState(isNext);
  

  const pageRef = useRef(1);

  const [ref, inView] = useInView();
  console.log('sssssssssss', inView);

  useEffect(() => {
    console.log('ssssssssss tests');
    const loadMoreAnswers = async () => {
      const next = pageRef.current + 1;
      
      onNextPage({
        questionId,
        page: next,
        sortBy: filter,
      });

      // const { answers, isNext } = await getAnswers({
      //   questionId,
      //   page: next,
      //   sortBy: filter,
      // });

        console.log('ssssssssssssss safasdfsd a');
      if (allAnswers?.length) {
        // setAllAnswers((prevAnswers) => [...prevAnswers, ...answers]);
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

      onNextPage({
        questionId,
        page: pageRef.current,
        sortBy: filter,
      });

      // const { answers, isNext } = await getAnswers({
      //   questionId,
      //   page: pageRef.current,
      //   sortBy: filter,
      // });

      // setAllAnswers(answers);

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
                onItemUpdate={onItemUpdate}
                // setAllAnswers={setAllAnswers as any}
              />
            </div>
          </div>

          <ParseHTML data={answer.content} />
        </article>
      ))}

      {isNextPage && (
        <div className='mt-11 flex w-full items-center justify-center' ref={ref}>
        {/* <div className='mt-11 flex w-full items-center justify-center' ref={inViewRef}> */}
          <Icons.Spinner className='size-9 animate-spin' />
        </div>
      )}
    </>
  );
};

export default AllAnswersInfiniteScroll;
