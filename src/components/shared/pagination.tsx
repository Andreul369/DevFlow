'use client';

import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const PaginationComponent = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleNavigation = (direction: string) => {
    const nextPageNumber = direction === 'prev' ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${pageNumber - 1}`}
            onClick={() => handleNavigation('prev')}
            className='body-medium text-dark200_light800'
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' className='body-medium text-dark200_light800'>
            1 | {pageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive className='body-medium text-dark200_light800'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' className='body-medium text-dark200_light800'>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className='body-medium text-dark200_light800' />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`?page=${pageNumber + 1}`}
            onClick={() => handleNavigation('next')}
            className='body-medium text-dark200_light800'
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
