import React from 'react';

import { getQuestionById } from '@/lib/actions/question.action';

import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.action';

import QuestionForm from '@/components/forms/question-form';
import { ParamsProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Question | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const EditQuestionPage = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div>
        <h1 className='h1-bold text-dark100_light900'>Edit Question</h1>
        <div className='mt-9'>
          <QuestionForm
            type='edit'
            mongoUserId={JSON.stringify(mongoUser?._id)}
            questionDetails={JSON.stringify(result)}
          />
        </div>
      </div>
    </>
  );
};

export default EditQuestionPage;
