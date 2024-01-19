import React from 'react';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import { getAnswers } from '@/lib/actions/answer.action';

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: number;
}

const AllAnswers = async ({ questionId, userId, totalAnswers, page, filter }: Props) => {
  const result = await getAnswers({ questionId });
  console.log(result);
  return (
    <div className='mt-11'>
      <div className='flex items-center justify-between'>
        <h3 className='primary-text-gradient'>{`${totalAnswers} ${totalAnswers === 1 ? 'Answer' : 'Answers'}`}</h3>

        <Filter filters={AnswerFilters} />
      </div>
      <div>
        {result.answers.map((answer) => (
          <article key={answer._id} className='light-border border-b py-10'>
            <div className='flex items-center justify-between'>{answer.content}</div>
          </article>
        ))}
      </div>
      • answered Aug 6, 2022 at 21:01 (answer)
    </div>
  );
};

export default AllAnswers;
