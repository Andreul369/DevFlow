'use client';

import { downvoteAnswer, upvoteAnswer } from '@/lib/actions/answer.action';
import { viewQuestion } from '@/lib/actions/interaction.action';
import { downvoteQuestion, upvoteQuestion } from '@/lib/actions/question.action';
import { toggleSaveQuestion } from '@/lib/actions/user.action';
import { cn, formatAndDivideNumber } from '@/lib/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useOptimistic, useState, useTransition } from 'react';
import { toast } from 'sonner';
import * as Icons from '@/components/ui/icons';
import { Button } from '../ui/button';

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [localUpvotes, setLocalUpvotes] = useState(upvotes);
  const [localDownvotes, setLocalDownvotes] = useState(downvotes);
  const [localHasUpVoted, setLocalHasUpVoted] = useState(hasupVoted);
  const [localHasDownVoted, setLocalHasDownVoted] = useState(hasdownVoted);
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
      setLocalHasUpVoted(!localHasUpVoted);
      setLocalHasDownVoted(false);
      setLocalUpvotes((prev) => (localHasUpVoted ? prev - 1 : prev + 1));
      setLocalDownvotes((prev) => (localHasDownVoted ? prev - 1 : prev));

      if (type === 'Question') {
        await upvoteQuestion({
          questionId: itemId,
          userId,
          hasupVoted: localHasUpVoted,
          hasdownVoted: localHasDownVoted,
          path: pathname,
        });
      } else if (type === 'Answer') {
        await upvoteAnswer({
          answerId: itemId,
          userId,
          hasupVoted: localHasUpVoted,
          hasdownVoted: localHasDownVoted,
          path: pathname,
        });
      }

      return toast.success(`Upvote ${!localHasUpVoted ? 'Successful' : 'Removed'}`);
    }

    if (action === 'downvote') {
      setLocalHasDownVoted(!localHasDownVoted);
      setLocalHasUpVoted(false);
      setLocalDownvotes((prev) => (localHasDownVoted ? prev - 1 : prev + 1));
      setLocalUpvotes((prev) => (localHasUpVoted ? prev - 1 : prev));

      if (type === 'Question') {
        await downvoteQuestion({
          questionId: itemId,
          userId,
          hasupVoted: localHasUpVoted,
          hasdownVoted: localHasDownVoted,
          path: pathname,
        });
      } else if (type === 'Answer') {
        await downvoteAnswer({
          answerId: itemId,
          userId,
          hasupVoted: localHasUpVoted,
          hasdownVoted: localHasDownVoted,
          path: pathname,
        });
      }

      return toast.success(`Downvote ${!localHasDownVoted ? 'Successful' : 'Removed'}`);
    }
  };
  console.log(localUpvotes);
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
              localHasUpVoted && 'fill-[#6DFF8D]'
            )}
            onClick={() => handleVote('upvote')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='subtle-medium text-dark400_light900'>
              {formatAndDivideNumber(localUpvotes)}
            </p>
          </div>
        </div>

        <div className='flex-center gap-1.5'>
          <Icons.ThumbsDown
            className={cn(
              'size-5 stroke-1 text-[#7B8EC8]',
              localHasDownVoted && 'fill-[#FF6D6D]'
            )}
            onClick={() => handleVote('downvote')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='subtle-medium text-dark400_light900'>
              {formatAndDivideNumber(localDownvotes)}
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
