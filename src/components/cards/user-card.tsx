import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RenderTag from '../shared/render-tag';
import { Badge } from '../ui/badge';
import { getTopInteractedTags } from '@/lib/actions/tag.action';

interface Props {
  user: {
    _id: string;
    clerkId: string;
    name: string;
    username: string;
    picture: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className='w-full max-xs:min-w-full xs:w-[260px]'
    >
      <article className='flex w-full flex-col items-center justify-center rounded-2xl border bg-surface p-8'>
        <Image
          src={user.picture}
          alt='user profile picture'
          width={100}
          height={100}
          className='rounded-full'
        />
        <div className='mt-4 text-center'>
          <h3 className='line-clamp-1 text-xl font-bold'>{user.name}</h3>
          <p className='mt-2'>@{user.username}</p>
        </div>

        <div className='mt-5'>
          {interactedTags.length > 0 ? (
            <div className='flex items-center gap-2'>
              {interactedTags.map((tag) => (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
