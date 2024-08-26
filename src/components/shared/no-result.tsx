import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Props {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const NoResult = ({ title, description, link, linkText }: Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center'>
      <Image
        src='/assets/images/light-illustration.png'
        width={270}
        height={200}
        alt='No Result'
        className='block object-contain dark:hidden'
      />
      <Image
        src='/assets/images/dark-illustration.png'
        width={270}
        height={200}
        alt='No Result'
        className='hidden object-contain dark:flex'
      />

      <h2 className='mt-8 text-2xl leading-8'>{title}</h2>
      <p className='mt-3.5 max-w-md text-center'>{description}</p>

      <Link href={link}>
        <Button className='mt-5 min-h-12 rounded-lg bg-primary px-4 py-3'>
          {linkText}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
