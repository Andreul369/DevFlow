import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import { SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import Metric from '../shared/metric';
import EditDeleteAction from '../shared/edit-delete-action';

interface AnswerProps {
  clerkId?: string | null;
  _id: string;
  question: { _id: string; title: string };
  author: { _id: string; clerkId: string; name: string; picture: string };
  upvotes: number;
  createdAt: Date;
}

const AnswerCard = ({
  clerkId,
  _id,
  question,
  author,
  upvotes,
  createdAt,
}: AnswerProps) => {
  const showActionButtons = clerkId && clerkId === author.clerkId;

  return (
    <Link
      href={`/question/${question._id}/#${_id}`}
      className='rounded-[10px] px-11 py-9'
    >
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='line-clamp-1 flex sm:hidden'>{getTimestamp(createdAt)}</span>
          <h3 className='flex-1'>{question.title}</h3>
        </div>

        <SignedIn>
          {showActionButtons && (
            <EditDeleteAction type='Answer' itemId={JSON.stringify(_id)} />
          )}
        </SignedIn>
      </div>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        <Metric
          imgUrl={author.picture}
          alt='user avatar'
          value={author.name}
          title={` • asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author.clerkId}`}
          textStyles='body-medium'
          isAuthor
        />

        <div className='flex-center gap-3'>
          <Metric
            imgUrl='/assets/icons/like.svg'
            alt='like icon'
            value={formatAndDivideNumber(upvotes)}
            title=' Votes'
            textStyles='small-medium'
          />
        </div>
      </div>
    </Link>
  );
};

export default AnswerCard;
