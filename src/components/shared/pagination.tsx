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

interface Props {
  page: string;
  slug?: string;
  pageNumber: number;
  isNext: boolean;
  totalPages: number;
}

const SharedPagination = ({ pageNumber, slug, isNext, page, totalPages }: Props) => {
  // if you can't click next when pageNumber = 1, there's no point in displaying the Pagination component
  if (!isNext && pageNumber === 1) return null;

  console.log(totalPages);

  const paginationItems = [...Array(totalPages)].map((_, index) => (
    <PaginationItem key={index}>
      <PaginationLink
        href={`#page${index + 1}`}
        isActive={pageNumber === index + 1}
        scroll={false}
      >
        {index + 1}
      </PaginationLink>
    </PaginationItem>
  ));

  return (
    <Pagination>
      <PaginationContent>
        {/*  */}
        <PaginationItem>
          <PaginationPrevious
            href={
              pageNumber - 1 > 1
                ? `/${page}/${slug}?page=${pageNumber - 1}`
                : pageNumber - 1 === 1
                  ? `/${page}/${slug}`
                  : ``
            }
          />
        </PaginationItem>

        {paginationItems}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className='scroll-smooth'>
          <PaginationNext
            href={isNext ? `/${page}/${slug}?page=${pageNumber + 1}` : ``}
            scroll={!!isNext}
          />
        </PaginationItem>
        {/*  */}
      </PaginationContent>
    </Pagination>
  );
};

export default SharedPagination;
