import Link from 'next/link';
import React from 'react';
import RenderTag from '../shared/render-tag';
import Metric from '../shared/metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import { SignedIn } from '@clerk/nextjs';
import EditDeleteAction from '../shared/edit-delete-action';
import { IQuestionWithId } from '@/database/question.model';

interface QuestionProps {
  clerkId?: string | null;
  question: IQuestionWithId;
}

const QuestionCard = ({ clerkId, question }: QuestionProps) => {
  const showActionButtons = clerkId && clerkId === question.author;

  return (
    <div className='card-wrapper rounded-lg p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {getTimestamp(question.createdAt)}
          </span>
          <Link href={`/question/${question._id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>
              {question.title}
            </h3>
          </Link>
        </div>

        <SignedIn>
          {showActionButtons && (
            <EditDeleteAction type='Question' itemId={JSON.stringify(question._id)} />
          )}
        </SignedIn>
      </div>

      <div className='mt-3.5 flex flex-wrap gap-2'>
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        <Metric
          imgUrl={question.author.picture}
          alt='user'
          value={question.author.name}
          title={` - asked ${getTimestamp(question.createdAt)}`}
          href={`/profile/${question.author._id}`}
          isAuthor
          textStyles='body-medium text-dark400_light700'
        />

        <div className='flex items-center gap-4 max-sm:flex-wrap max-sm:justify-start'>
          <Metric
            imgUrl='/assets/icons/like.svg'
            alt='upvotes'
            value={formatAndDivideNumber(question.upvotes.length)}
            title=' Votes'
            textStyles='small-medium text-dark400_light800'
          />
          <Metric
            imgUrl='/assets/icons/message.svg'
            alt='message'
            value={formatAndDivideNumber(question.answers.length)}
            title=' Answers'
            textStyles='small-medium text-dark400_light800'
          />
          <Metric
            imgUrl='/assets/icons/eye.svg'
            alt='eye'
            value={formatAndDivideNumber(question.views)}
            title=' Views'
            textStyles='small-medium text-dark400_light800'
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
