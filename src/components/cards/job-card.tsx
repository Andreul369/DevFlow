import Link from 'next/link';
import React from 'react';
import RenderTag from '../shared/render-tag';
import Metric from '../shared/metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import { SignedIn } from '@clerk/nextjs';
import EditDeleteAction from '../shared/edit-delete-action';
import Image from 'next/image';

interface QuestionProps {
  clerkId?: string | null;
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: { _id: string; clerkId: string; name: string; picture: string };
  upvotes: string[];
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const JobCard = ({
  clerkId,
  title,
  _id,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className='background-light900_dark200 light-border shadow-light100_darknone flex flex-col items-start gap-6 rounded-lg border p-6 sm:flex-row sm:p-8'>
      <div className='flex items-center gap-6'>
        <Image src='/assets/icons/clock-2.svg' alt='clock' width={40} height={40} />
      </div>
      <div className='w-full'>
        <div className='flex-between flex-wrap gap-2'>
          <p className='base-semibold text-dark200_light900'>SNI</p>
          <div className='hidden sm:flex'></div>
        </div>
        <p className='body-regular text-dark500_light700 mt-2 line-clamp-2'>
          Overview To be part of our organization, every employee should understand and
          share in the YNHHS Vision, support our Mission, and live our Values. These
          values - integrity,
        </p>
        <div className='flex-between mt-8 flex-wrap gap-6'>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Image src='/assets/icons/clock-2.svg' alt='clock' width={20} height={20} />
              <p className='body-medium text-light-500'>FULLTIME</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src='/assets/icons/currency-dollar-circle.svg'
                alt='clock'
                width={20}
                height={20}
              />
              <p className='body-medium text-light-500'>Not disclosed</p>
            </div>
          </div>
          <Link href='#' className='flex items-center gap-2'>
            <p className='body-semibold primary-text-gradient'>View Job</p>
            <Image
              src='/assets/icons/arrow-up-right.svg'
              alt='clock'
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
