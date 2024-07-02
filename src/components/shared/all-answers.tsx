import React from 'react';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import { getAnswers } from '@/lib/actions/answer.action';
import AllAnswersInfiniteScroll from './all-answers-infinite-scroll';
import AnswerForm from '../forms/answer-form';
import Link from 'next/link';
import Image from 'next/image';
import Votes from './votes';
import ParseHTML from './parse-html';
import { getTimestamp } from '@/lib/utils';
interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: string;
  filter?: string;
}

const AllAnswers = async ({ questionId, userId, totalAnswers, page, filter }: Props) => {
  const result = await getAnswers({
    questionId,
    page: page ? +page : 1,
    sortBy: filter,
  });

  return (
    <div className='mt-11'>
      <div className='flex items-center justify-between'>
        <h3 className='primary-text-gradient'>{totalAnswers} Answers</h3>

        <Filter filters={AnswerFilters} />
      </div>

      <AllAnswersInfiniteScroll
        initialAnswers={result.answers}
        questionId={questionId}
        userId={userId}
        isNext={result.isNext}
        filter={filter}
      />
    </div>
  );
};

export default AllAnswers;
