'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Filter from './filter';
import { AnswerFilters } from '@/constants/filters';
import { downvoteAnswer, getAnswers, upvoteAnswer } from '@/lib/actions/answer.action';
import AllAnswersInfiniteScroll from './all-answers-infinite-scroll';
import { AnswerVoteParams, GetAnswersParams, QuestionVoteParams } from '../../lib/actions/shared.types';
import { downvoteQuestion, upvoteQuestion } from '../../lib/actions/question.action';
// import { useInView } from 'react-intersection-observer';

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: string;
  filter?: string;
  answers: Array<any>;
  isNext: boolean;
  // onNextPage: (prosp: GetAnswersParams) => void;
}

// NOTE: Typeguard typescript 
const isQuestionData = (data: AnswerVoteParams | QuestionVoteParams): data is QuestionVoteParams => Object.prototype.hasOwnProperty.call(data, 'questionId');
const isAnswerData = (data: AnswerVoteParams | QuestionVoteParams): data is AnswerVoteParams => Object.prototype.hasOwnProperty.call(data, 'answerId');

const AllAnswers = ({ questionId, userId, totalAnswers, filter }: Props) => {
  
  // Bagi useEffect
  // Faci state-ul cu [ansers, setAnsers]
  // Enable la onNextPage={onNextPage} si steezi state-ul

  const [filters, setFilters] = useState<GetAnswersParams>({
    questionId,
    sortBy: filter,
  })

  const [answers, setAllAnswers] = useState<Array<any>>([]);
  const [isNext, setIsNext] = useState(false);
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   console.log('sssssssssssssssss is in view', inView);
  // }, [inView])

  useEffect(() => {
    const fn = async () => {
      const { answers, isNext } = await getAnswers(filters);
      
      setAllAnswers(answers)
      setIsNext(isNext);
      console.log('sssssssssssssssss getansersk:w');
    }

    fn();
    
  }, [filters])

  const handleNextPage = useCallback((data: GetAnswersParams) => {
    setFilters(data);
  }, []);

  const handleItemUpdate = useCallback(async (itemId: string, action: string, data: AnswerVoteParams | QuestionVoteParams) => {
     setAllAnswers((prevState) => {
      const findIndex = prevState.findIndex((item) => item._id === itemId);

      if (findIndex > -1) {
        // TODO: fix this one
        const newState = [...prevState];
        console.log('newState[findIndex]===', newState[findIndex]);
        if (action === 'upvote') {
          newState[findIndex] = {
            ...newState[findIndex],
            upvotes: newState[findIndex].upvotes.includes(itemId)
              ? newState[findIndex].upvotes.filter((id: string) => id !== itemId)
              : [...newState[findIndex].upvotes, itemId],
            downvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].downvotes.filter((id: string) => id !== itemId)
              : newState[findIndex].downvotes,
          };
          return newState;
        } else {
          newState[findIndex] = {
            ...newState[findIndex],
            upvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].upvotes.filter((id: string) => id !== itemId)
              : newState[findIndex].upvotes,
            downvotes: newState[findIndex].downvotes.includes(itemId)
              ? newState[findIndex].downvotes.filter((id: string) => id !== itemId)
              : [...newState[findIndex].downvotes, itemId],
          };
          return newState;
        }
      }

      return prevState;
    });

    if (isQuestionData(data)) {

      if (action === 'upvote') {
        await upvoteQuestion(data);
      } else {
        await downvoteQuestion(data);
      }
    } else if (isAnswerData(data)) {
      if (action === 'upvote') {
        await upvoteAnswer(data);
      } else {
        await downvoteAnswer(data);
      }
    }

  }, []);
        

  // console.log('sssssssssssssss', 'ssstest', answers?.length);

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
        onNextPage={handleNextPage}
        onItemUpdate={handleItemUpdate}
        // inViewRef={ref}

      />
    </div>
  );
};

export default AllAnswers;
