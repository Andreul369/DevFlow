'use client';

import { downvoteAnswer, upvoteAnswer } from '@/lib/actions/answer.action';
import { viewQuestion } from '@/lib/actions/interaction.action';
import { downvoteQuestion, upvoteQuestion } from '@/lib/actions/question.action';
import { toggleSaveQuestion } from '@/lib/actions/user.action';
import { cn, formatAndDivideNumber } from '@/lib/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect} from 'react';
import { toast } from 'sonner';
import * as Icons from '@/components/ui/icons';
import { AnswerVoteParams, QuestionVoteParams } from '../../lib/actions/shared.types';

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
  onItemUpdate: (itemId: string, action: string, data: AnswerVoteParams | QuestionVoteParams) => void;
}

const isQuestion = (type: string): boolean => type === 'Question';
const isAnswer = (type: string): boolean => type === 'Answer';

const Votes = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const {
    type,
    itemId,
    userId,
    upvotes,
    hasupVoted,
    downvotes,
    hasdownVoted,
    hasSaved,
    onItemUpdate,
  } = props;

  const handleSave = async () => {
    await toggleSaveQuestion({
      userId,
      questionId: itemId,
      path: pathname,
    });

    return toast(
      `Question ${!hasSaved ? 'Saved in' : 'Removed from'} your collection`,
      {}
    );
  };

  const handleVote = async (action: string) => {
    if (!userId) {
      return toast('Please log in', {
        description: 'You must be logged in to perform this action',
      });
    }

    if (action === 'upvote') {
      
      const data: Record<string, any> = {
        userId,
        hasupVoted,
        hasdownVoted,
        path: pathname,
      };

      if (isQuestion(type)) {
        data.questionId = JSON.parse(itemId);
      } else if (isAnswer(type)) {
        data.answerId = itemId;

      }

      onItemUpdate(itemId, action, data as unknown as AnswerVoteParams | QuestionVoteParams);

      return toast.success(`Upvote ${!hasupVoted ? 'Successful' : 'Removed'}`);
    }

    if (action === 'downvote') {
      const data: Record<string, unknown> = {
          userId,
          hasupVoted,
          hasdownVoted,
          path: pathname,
      };

      if (isQuestion(type)) {
        data.questionId = JSON.parse(itemId);
      } else if (isAnswer(type)) {
        data.answerId = itemId;
      }

      if (type === 'Question') {
        onItemUpdate(itemId, action, data as unknown as AnswerVoteParams | QuestionVoteParams);
        // FIXME: delete this line 
        // await downvoteQuestion({
        //   questionId: JSON.parse(itemId),
        //   userId,
        //   hasupVoted,
        //   hasdownVoted,
        //   path: pathname,
        // });
      } else if (type === 'Answer') {
        onItemUpdate(itemId, action, data as unknown as AnswerVoteParams | QuestionVoteParams);
        // FIXME: delete this line 
        // await downvoteAnswer({
        //   answerId: itemId,
        //   userId,
        //   hasupVoted,
        //   hasdownVoted,
        //   path: pathname,
        // });
      }

      return toast.success(`Downvote ${!hasdownVoted ? 'Successful' : 'Removed'}`);
    }
  };

  useEffect(() => {
    viewQuestion({
      questionId: itemId,
      userId: userId || undefined,
    });
  }, [itemId, userId, pathname, router]);

  return (
    <div className='flex gap-5'>
      <div className='flex-center gap-2.5'>
        <div className='flex-center gap-1.5'>
          <Icons.ThumbsUp
            className={cn(
              'size-5 stroke-1 text-[#7B8EC8]',
              hasupVoted && 'fill-[#6DFF8D]'
            )}
            onClick={() => handleVote('upvote')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='subtle-medium text-dark400_light900'>
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>

        <div className='flex-center gap-1.5'>
          <Icons.ThumbsDown
            className={cn(
              'size-5 stroke-1 text-[#7B8EC8]',
              hasdownVoted && 'fill-[#FF6D6D]'
            )}
            onClick={() => handleVote('downvote')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='subtle-medium text-dark400_light900'>
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>

      {type === 'Question' && (
        <Image
          src={hasSaved ? '/assets/icons/star-filled.svg' : '/assets/icons/star-red.svg'}
          width={18}
          height={18}
          alt='star'
          className='cursor-pointer'
          onClick={handleSave}
        />
      )}
    </div>
  );
};

export default Votes;
