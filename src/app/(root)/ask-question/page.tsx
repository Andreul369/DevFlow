import React from 'react';
import QuestionForm from '@/components/forms/question-form';
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask a Question | Dev Overflow',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

const AskQuestionPage = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className='text-3xl font-bold'>Ask a Question</h1>
      <div className='mt-9'>
        <QuestionForm mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
