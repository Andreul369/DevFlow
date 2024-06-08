import React from 'react';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import { getAnswers } from '@/lib/actions/answer.action';
import AllAnswersInfiniteScroll from './all-answers-infinite-scroll';

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: string;
  filter?: string;
}

const AllAnswers = async ({ questionId, userId, totalAnswers, page, filter }: Props) => {
  const { answers, isNext } = await getAnswers({
    questionId,
    page: 1,
    sortBy: filter,
  });

  return (
    <div className='mt-11'>
      <div className='flex items-center justify-between'>
        <h3 className='primary-text-gradient'>{`${totalAnswers} ${totalAnswers === 1 ? 'Answer' : 'Answers'}`}</h3>

        <Filter filters={AnswerFilters} />
      </div>

      <AllAnswersInfiniteScroll
        initialAnswers={answers}
        questionId={questionId}
        userId={userId}
        isNext={isNext}
        filter={filter}
      />
    </div>
  );
};

export default AllAnswers;
