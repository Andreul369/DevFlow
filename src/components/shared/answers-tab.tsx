import React from 'react';
import { getUserAnswers } from '@/lib/actions/user.action';
import AnswerCard from '../cards/answer-card';
import { SearchParamsProps } from '@/types';

import { Pagination } from '../ui/pagination';

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const { answers, isNextAnswers } = await getUserAnswers({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      {answers.map((answer) => (
        <AnswerCard
          key={answer._id}
          clerkId={clerkId}
          _id={answer._id}
          question={answer.question}
          author={answer.author}
          upvotes={answer.upvotes.length}
          createdAt={answer.createdAt}
        />
      ))}

      <div className='mt-10'>
        <Pagination></Pagination>
      </div>
    </>
  );
};

export default AnswersTab;
