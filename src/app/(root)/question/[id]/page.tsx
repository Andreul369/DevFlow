import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getQuestionById } from '@/lib/actions/question.action';
import Metric from '@/components/shared/metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import ParseHTML from '@/components/shared/parse-html';
import RenderTag from '@/components/shared/render-tag';
import AnswerForm from '@/components/forms/answer-form';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.action';

const QuestionPage = async ({ params, searchParams }: any) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });
  const question = await getQuestionById({ questionId: params.id });

  console.log('question', question);

  return (
    <>
      <div className='flex-start w-full flex-col'>
        <div className='flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
          <Link
            href={`/profile/${question.author.clerkId}`}
            className='flex items-center justify-start gap-1'
          >
            <Image
              src={question.author.picture}
              alt='profile picture'
              width={22}
              height={22}
              className='rounded-full'
            />
            <p className='paragraph-semibold text-dark300_light700'>
              {question.author.name}
            </p>
          </Link>
          <div className='flex justify-end'>VOTING Func</div>
        </div>
        <h2 className='h2-semibold text-dark200_light900 mt-3.5 w-full text-left'>
          {question.title}
        </h2>
      </div>

      <div className='mb-8 mt-5 flex flex-wrap gap-4'>
        <Metric
          imgUrl='/assets/icons/clock.svg'
          alt='clock icon'
          value={` asked ${getTimestamp(question.createdAt)}`}
          title=' Asked'
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

      <ParseHTML data={question.content} />

      <div className='mt-8 flex flex-wrap gap-2'>
        {question.tags.map((tag: any) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} showCount={false} />
        ))}
      </div>

      <AnswerForm
        question={question.content}
        questionId={JSON.stringify(question._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
    </>
  );
};

export default QuestionPage;
