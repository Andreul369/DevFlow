// @ts-nocheck
'use client';

import { downvoteAnswer, upvoteAnswer } from '@/lib/actions/answer.action';
import { viewQuestion } from '@/lib/actions/interaction.action';
import { downvoteQuestion, upvoteQuestion } from '@/lib/actions/question.action';
import { toggleSaveQuestion } from '@/lib/actions/user.action';
import { cn, formatAndDivideNumber } from '@/lib/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition, useEffect, useOptimistic, useState } from 'react';
import { toast } from 'sonner';
import * as Icons from '@/components/ui/icons';

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
  onItemUpdate: (itemId: string) => void;
  // setAllAnswers: ReturnType<typeof useState>;
}

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
    // setAllAnswers,
  } = props;

  // console.log('sssssssetAllAnswers', setAllAnswers);

  const handleSave = async () => {
    await toggleSaveQuestion({
      userId,
      questionId: itemId,
      path: pathname,
    });

    return toast(`Question ${!hasSaved ? 'Saved in' : 'Removed from'} your collection`, {
      // variant: !hasSaved ? 'default' : 'destructive',
    });
  };

  const [optimisticDownvotes, addOptimisticDownvote] = useOptimistic(
    { downvotes, hasdownVoted },
    // @ts-ignore
    (state, newDownvote) => ({
      upvotes: state.downvotes + newDownvote.downvotes,
      hasupVoted: newDownvote.hasdownVoted,
    })
  );

  const handleVote = async (action: string) => {
    if (!userId) {
      return toast('Please log in', {
        description: 'You must be logged in to perform this action',
      });
    }

    if (action === 'upvote') {
      if (type === 'Question') {
        startTransition(async () => {
          // console.log('ssssssxxxxxxxx', upvotes , 1);
          // console.log('ssssss', newUpvotes);
          // onItemUpdate(itemId,  upvotes + 1);
          onItemUpdate(itemId);
          // addOptimisticUpvote({ upvotes: hasupVoted ? -1 : 1, hasupVoted: !hasupVoted });
          await upvoteQuestion({
            questionId: JSON.parse(itemId),
            userId,
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        });
      } else if (type === 'Answer') {
        startTransition(async () => {
          // console.log('ssssssxxxxxxxx', upvotes , 1);
          // console.log('ssssss', newUpvotes);
          onItemUpdate(itemId);
          // addOptimisticUpvote({ upvotes: hasupVoted ? -1 : 1, hasupVoted: !hasupVoted });
          await upvoteAnswer({
            answerId: itemId,
            userId,
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        });
      }

      return toast.success(`Upvote ${!hasupVoted ? 'Successful' : 'Removed'}`);
    }

    if (action === 'downvote') {
      if (type === 'Question') {
        startTransition(async () => {
          addOptimisticDownvote({
            downvotes: hasdownVoted ? -1 : 1,
            hasdownVoted: !hasdownVoted,
          });
          await downvoteQuestion({
            questionId: JSON.parse(itemId),
            userId,
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        });
      } else if (type === 'Answer') {
        startTransition(async () => {
          addOptimisticDownvote({
            downvotes: hasdownVoted ? -1 : 1,
            hasdownVoted: !hasdownVoted,
          });
          await downvoteAnswer({
            answerId: itemId,
            userId,
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        });
      }

      return toast.success(`Downvote ${!hasdownVoted ? 'Successful' : 'Removed'}`);
      // variant: !hasupVoted ? 'default' : 'destructive',
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
              optimisticDownvotes.hasdownVoted && 'fill-[#FF6D6D]'
            )}
            onClick={() => handleVote('downvote')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='subtle-medium text-dark400_light900'>
              {formatAndDivideNumber(optimisticDownvotes.downvotes)}
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
