import React from 'react';

import { getAnswers } from '@/lib/actions/answer.action';
import AllAnswersInfiniteScroll from './all-answers-infinite-scroll';
import { IQuestionWithId } from '@/database/question.model';

interface Props {
  question: IQuestionWithId;
  questionId: string;
  user: string;
  totalAnswers: number;
  page?: string;
  filter?: string;
}

const AllAnswers = async ({
  questionId,
  question,
  user,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const result = await getAnswers({
    questionId,
    page: page ? +page : 1,
    sortBy: filter,
  });

  return (
    <AllAnswersInfiniteScroll
      initialAnswers={result.answers}
      questionId={questionId}
      user={user}
      isNext={result.isNext}
      filter={filter}
      question={question}
      totalAnswers={totalAnswers}
    />
  );
};

export default AllAnswers;
