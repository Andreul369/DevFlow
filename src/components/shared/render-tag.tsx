import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className='flex items-center justify-between gap-2'>
      {/* // TODO: check the font colors from here */}
      <Badge className='rounded-md border-none bg-embark px-3 py-1 uppercase text-[#363636] hover:text-[#F6F6F6] dark:text-[#F6F6F6]'>
        {name}
      </Badge>
      {showCount && <p className='text-sm'>{totalQuestions}</p>}
    </Link>
  );
};

export default RenderTag;
