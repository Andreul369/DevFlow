'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Votes from './votes';
import { getTimestamp } from '@/lib/utils';
import ParseHTML from './parse-html';

interface Props {
  userId: string;
}

const AnswerCard = ({ answer, userId }: Props) => {
  return (
    <article key={answer._id} className='light-border border-b py-10'>
      <div className='mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
        <Link
          href={`/profile/${answer?.author?.clerkId}`}
          className='flex flex-1 items-start gap-1 sm:items-center'
        >
          <Image
            src={answer?.author?.picture}
            alt='profile picture'
            width={18}
            height={18}
            className='rounded-full object-cover max-sm:mt-0.5'
          />
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <p className='body-semibold text-dark300_light700'>{answer?.author?.name}</p>
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
  );
};

export default AnswerCard;
