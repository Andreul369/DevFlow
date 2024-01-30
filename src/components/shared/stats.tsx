import React from 'react';

interface Props {
  totalQuestions: number;
  totalAnswers: number;
}

const Stats = ({ totalQuestions, totalAnswers }: Props) => {
  return (
    <div className='card-wrapper mt-10'>
      {totalQuestions} Questions, {totalAnswers} Answers
      <h4 className='h3-semibold text-dark200_light900'>Stats</h4>
      <div className='mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4'> </div>
    </div>
  );
};

export default Stats;
