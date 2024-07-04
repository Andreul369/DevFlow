'use client';

import React from 'react';
import AnswerForm from '../forms/answer-form';
import AllAnswers from './all-answers';
import { getAnswers } from '@/lib/actions/answer.action';
import AllAnswersInfiniteScroll from './all-answers-infinite-scroll';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';

const AnswersSection = async ({
  question,
  questionId,
  authorId,
  totalAnswers,
  filter,
}) => {
  // const result = await getAnswers({
  //   questionId,
  //   page: 1,
  //   sortBy: filter,
  // });

  return (
    <>
      <AnswerForm
        question={question}
        questionId={JSON.stringify(questionId)}
        authorId={JSON.stringify(authorId)}
      />
      <AllAnswers
        questionId={questionId.toString()}
        userId={authorId.toString()}
        totalAnswers={totalAnswers}
        filter={filter}
      />

      <div className='mt-11'>
        <div className='flex items-center justify-between'>
          <h3 className='primary-text-gradient'>{totalAnswers} Answers</h3>

          <Filter filters={AnswerFilters} />
        </div>

        <AllAnswersInfiniteScroll
          initialAnswers={result.answers}
          questionId={questionId}
          userId={JSON.stringify(authorId)}
          isNext={result.isNext}
          filter={filter}
        />
      </div>
    </>
  );
};

export default AnswersSection;
