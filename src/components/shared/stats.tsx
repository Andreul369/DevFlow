import { formatAndDivideNumber } from '@/lib/utils';
import { BadgeCounts } from '@/types';
import Image from 'next/image';
import React from 'react';

interface Props {
  totalQuestions: number;
  totalAnswers: number;
  badges: BadgeCounts;
  reputation: number;
}

interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => {
  return (
    <div className='flex flex-wrap items-center justify-start gap-4 rounded-md border bg-surface p-6'>
      <Image src={imgUrl} alt={title} width={40} height={50} />
      <div>
        <p className='font-semibold'>{value}</p>
        <p>{title}</p>
        <p></p>
      </div>
    </div>
  );
};

const Stats = ({ totalQuestions, totalAnswers, badges, reputation }: Props) => {
  return (
    <div className='mt-10'>
      <h4 className='text-xl font-semibold'>Stats - {reputation}</h4>

      <div className='mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4'>
        <div className='flex flex-wrap items-center justify-evenly gap-4 rounded-md border bg-surface p-6'>
          <div>
            <p className='font-semibold'>{formatAndDivideNumber(totalQuestions)}</p>
            <p>Questions</p>
          </div>
          <div>
            <p className='font-semibold'>{formatAndDivideNumber(totalAnswers)}</p>
            <p>Answers</p>
          </div>
        </div>

        <StatsCard
          imgUrl='/assets/icons/gold-medal.svg'
          value={badges.GOLD}
          title='Gold Badges'
        />
        <StatsCard
          imgUrl='/assets/icons/silver-medal.svg'
          value={badges.SILVER}
          title='Silver Badges'
        />
        <StatsCard
          imgUrl='/assets/icons/bronze-medal.svg'
          value={badges.BRONZE}
          title='Bronze Badges'
        />
      </div>
    </div>
  );
};

export default Stats;
