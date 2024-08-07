import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getQuestionById } from '@/lib/actions/question.action';
import Metric from '@/components/shared/metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import ParseHTML from '@/components/shared/parse-html';
import RenderTag from '@/components/shared/render-tag';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.action';
import AllAnswers from '@/components/shared/all-answers';
import Votes from '@/components/shared/votes';
import { URLProps } from '@/types';

const QuestionPage = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div className='flex-start w-full flex-col'>
        <div className='flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
          <Link
            href={`/profile/${result.author.clerkId}`}
            className='flex items-center justify-start gap-1'
          >
            <Image
              src={result.author.picture}
              className='rounded-full'
              width={22}
              height={22}
              alt='profile'
            />
            <p className='paragraph-semibold text-dark300_light700'>
              {result.author.name}
            </p>
          </Link>
          <div className='flex justify-end'>
            <Votes
              type='Question'
              itemId={result._id}
              userId={mongoUser?._id}
              upvotes={result.upvotes.length}
              hasupVoted={result.upvotes.includes(mongoUser?._id)}
              downvotes={result.downvotes.length}
              hasdownVoted={result.downvotes.includes(mongoUser?._id)}
              hasSaved={mongoUser?.saved.includes(result?._id)}
            />
          </div>
        </div>
        <h2 className='h2-semibold text-dark200_light900 mt-3.5 w-full text-left'>
          {result.title}
        </h2>
      </div>

      <div className='mb-8 mt-5 flex flex-wrap gap-4'>
        <Metric
          imgUrl='/assets/icons/clock.svg'
          alt='clock icon'
          value={` asked ${getTimestamp(result.createdAt)}`}
          title=''
          textStyles='small-medium text-dark400_light800'
        />
        <Metric
          imgUrl='/assets/icons/message.svg'
          alt='message'
          value={formatAndDivideNumber(result.answers.length)}
          title=' Answers'
          textStyles='small-medium text-dark400_light800'
        />
        <Metric
          imgUrl='/assets/icons/eye.svg'
          alt='eye'
          value={formatAndDivideNumber(result.views)}
          title=' Views'
          textStyles='small-medium text-dark400_light800'
        />
      </div>

      <ParseHTML data={result.content} />

      <div className='mt-8 flex flex-wrap gap-2'>
        {result.tags.map((tag: any) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} showCount={false} />
        ))}
      </div>

      <AllAnswers
        questionId={result._id.toString()}
        user={mongoUser}
        totalAnswers={result.answers.length}
        filter={searchParams?.filter}
        question={result.content}
      />
    </>
  );
};

export default QuestionPage;
