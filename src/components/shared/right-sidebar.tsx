import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import RenderTag from './render-tag';
import { getHotQuestions } from '@/lib/actions/question.action';
import { getPopularTags } from '@/lib/actions/tag.action';

const RightSidebar = async () => {
  const hotQuestions = await getHotQuestions();
  const popularTags = await getPopularTags();

  return (
    <section className='custom-scrollbar sticky right-0 top-0 flex h-screen w-[320px] flex-col overflow-y-auto border-l bg-surface p-4 pt-32 max-xl:hidden'>
      <div>
        <h3 className='text-xl font-bold'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p>{question.title}</p>
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='chevron-right'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='text-xl font-bold'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4 '>
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
