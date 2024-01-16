import { getQuestionById } from '@/lib/actions/question.action';
import React from 'react';

const QuestionPage = async ({ params, searchParams }) => {
  const result = await getQuestionById({ questionId: params.id });

  console.log('result', result);

  return <div>{result.title}</div>;
};

export default QuestionPage;
