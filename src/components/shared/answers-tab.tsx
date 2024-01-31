import React from 'react';
import { getUserAnswers } from '@/lib/actions/user.action';

interface Props {
  searchParams: string;
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({ userId, page: 1 });
  console.log(result);
  return (
    <>
      {result.answers.map((answer) => (
        <p key={answer._id}>{answer.content}</p>
      ))}
    </>
  );
};

export default AnswersTab;
