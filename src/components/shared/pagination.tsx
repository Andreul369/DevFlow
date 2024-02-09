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

  // If there are no multiple pages to display, we hide the component
  if (!isNext && pageNumber === 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // TODO: smth doesn't work properly here
            href={pageNumber === 1 ? '' : `?page=${pageNumber - 1}`}
            onClick={() => handleNavigation('prev')}
            className='body-medium text-dark200_light800'
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${pageNumber - 1}`}
            className='body-medium text-dark200_light800'
          >
            {pageNumber - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${pageNumber}`}
            isActive
            className='body-medium text-dark200_light800'
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${pageNumber + 1}`}
            className='body-medium text-dark200_light800'
          >
            {pageNumber + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className='body-medium text-dark200_light800' />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={isNext ? `?page=${pageNumber + 1}` : ''}
            onClick={() => handleNavigation('next')}
            className='body-medium text-dark200_light800'
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
