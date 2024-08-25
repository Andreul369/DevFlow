import React from 'react';
import QuestionForm from '@/components/forms/question-form';
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import GlobalSearch from '@/components/shared/search/global-search';

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
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
      </div>

      <h1 className='pt-16 text-3xl font-bold'>Ask a Question</h1>
      <div className='mt-9'>
        <QuestionForm mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </>
  );
};

export default AskQuestionPage;
