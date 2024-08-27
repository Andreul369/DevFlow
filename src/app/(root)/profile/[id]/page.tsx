import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getUserInfo } from '@/lib/actions/user.action';
import { URLProps } from '@/types';
import { SignedIn, auth } from '@clerk/nextjs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { getJoinedDate } from '@/lib/utils';
import ProfileLink from '@/components/shared/profile-link';
import Stats from '@/components/shared/stats';
import AnswersTab from '@/components/shared/answers-tab';
import QuestionTab from '@/components/shared/questions-tab';
import GlobalSearch from '@/components/shared/search/global-search';

const Page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <>
      <div className='sticky top-0 z-50 w-full max-w-5xl pt-6 backdrop-blur-md'>
        <GlobalSearch />
      </div>

      <div className='flex flex-col-reverse items-start justify-between pt-16 sm:flex-row'>
        <div className='flex flex-col items-start gap-4 lg:flex-row'>
          <Image
            src={userInfo?.user.picture}
            alt='profile picture'
            width={140}
            height={140}
            className='rounded-full object-cover'
          />

          <div className='mt-3'>
            <h2 className='text-2xl leading-8'>{userInfo.user.name}</h2>
            <p>@{userInfo.user.username}</p>

            <div className='mt-5 flex flex-wrap items-center justify-start gap-5'>
              {userInfo.user.portfolioWebsite && (
                <ProfileLink
                  imgUrl='/assets/icons/link.svg'
                  href={userInfo.user.portfolioWebsite}
                  title='Portfolio'
                />
              )}

              {userInfo.user.location && (
                <ProfileLink
                  imgUrl='/assets/icons/location.svg'
                  title={userInfo.user.location}
                />
              )}

              <ProfileLink
                imgUrl='/assets/icons/calendar.svg'
                title={getJoinedDate(userInfo.user.joinedAt)}
              />
            </div>

            {userInfo.user.bio && <p className='mt-8'>{userInfo.user.bio}</p>}
          </div>
        </div>

        <div className='flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3'>
          <SignedIn>
            {clerkId === userInfo.user.clerkId && (
              <Link href='/profile/edit'>
                <Button className='min-h-12 min-w-44 px-4 py-3'>Edit Profile</Button>
              </Link>
            )}
          </SignedIn>
        </div>
      </div>

      <Stats
        reputation={userInfo.reputation}
        totalQuestions={userInfo.totalQuestions}
        totalAnswers={userInfo.totalAnswers}
        badges={userInfo.badgeCounts}
      />

      <div className='mt-10 flex gap-10'>
        <Tabs defaultValue='top-posts' className='flex-1'>
          <TabsList className='min-h-[42px] p-1'>
            <TabsTrigger value='top-posts'>Top Posts</TabsTrigger>
            <TabsTrigger value='answers'>Answers</TabsTrigger>
          </TabsList>
          <TabsContent value='top-posts' className='mt-5 flex w-full flex-col gap-6'>
            <QuestionTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
          <TabsContent value='answers' className='flex w-full flex-col gap-6'>
            <AnswersTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
