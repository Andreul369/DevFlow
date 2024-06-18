'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTimestamp } from '@/lib/utils';
import ParseHTML from './parse-html';
import Votes from './votes';
import { useInView } from 'react-intersection-observer';
import * as Icons from '@/components/ui/icons';
import { getAnswers } from '@/lib/actions/answer.action';

interface Props {
  children?: React.ReactNode;
}

const AllAnswersInfiniteScroll = ({ children }: Props) => {
  // const [allAnswers, setAllAnswers] = useState(initialAnswers);
  // const [isNextPage, setIsNextPage] = useState(isNext);

  const pageRef = useRef(1);

  const [ref, inView] = useInView();

  // useEffect(() => {
  //   const loadMoreAnswers = async () => {
  //     const next = pageRef.current + 1;

  //     const { answers: newAnswers, isNext } = await getAnswers({
  //       questionId,
  //       page: next,
  //       sortBy: filter,
  //     });

  //     if (allAnswers?.length) {
  //       setAllAnswers((prevAnswers) => [...prevAnswers, ...newAnswers]);
  //       setIsNextPage(isNext);
  //       pageRef.current = next;
  //     }
  //   };
  //   if (inView) {
  //     loadMoreAnswers();
  //   }
  // }, [inView]);

  // useEffect(() => {
  //   const filterAnswers = async () => {
  //     pageRef.current = 1;

  //     const { answers: newAnswers, isNext } = await getAnswers({
  //       questionId,
  //       page: pageRef.current,
  //       sortBy: filter,
  //     });

  //     setAllAnswers(newAnswers);
  //     setIsNextPage(isNext);
  //   };
  //   filterAnswers();
  // }, [filter]);

  return (
    <>
      {children}

      {/* {isNextPage && ( */}
      <div className='mt-11 flex w-full items-center justify-center' ref={ref}>
        <Icons.Spinner className='size-9 animate-spin' />
      </div>
      {/* )} */}
    </>
  );
};

export default AllAnswersInfiniteScroll;
