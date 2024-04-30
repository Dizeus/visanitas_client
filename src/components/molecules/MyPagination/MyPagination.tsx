import { FC } from 'react';
import { Pagination } from 'react-bootstrap';

interface MyPaginationProps {
  total: number;
  page: number;
  handleClick: (page: number) => void;
}
export const MyPagination: FC<MyPaginationProps> = ({
  total,
  page,
  handleClick,
}) => {
  const visiblePages =
    page === 1
      ? [page, page + 1]
      : page === total
        ? [page - 1, page]
        : [page - 1, page, page + 1];

  return (
    <Pagination className='d-flex justify-content-center mt-3 mb-0'>
      <Pagination.First
        disabled={page === 1}
        onClick={() => {
          page !== 1 && handleClick(1);
        }}
        data-testid='first'
      />
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => {
          page !== 1 && handleClick(page - 1);
        }}
        data-testid='prev'
      />
      {page > 2 && (
        <>
          <Pagination.Item
            active={1 === page}
            onClick={() => handleClick(1)}
            data-testid='page1'
          >
            {1}
          </Pagination.Item>
          {page > 3 && <Pagination.Ellipsis />}
        </>
      )}
      {visiblePages.map((visiblePage) => (
        <Pagination.Item
          key={visiblePage}
          active={visiblePage === page}
          onClick={() => handleClick(visiblePage)}
          data-testid={'page' + visiblePage}
        >
          {visiblePage}
        </Pagination.Item>
      ))}
      {page < total - 1 && (
        <>
          {page < total - 2 && <Pagination.Ellipsis />}
          <Pagination.Item
            active={total === page}
            onClick={() => handleClick(total)}
            data-testid={'page' + total}
          >
            {total}
          </Pagination.Item>
        </>
      )}
      <Pagination.Next
        disabled={page === total}
        onClick={() => {
          page !== total && handleClick(page + 1);
        }}
        data-testid='next'
      />
      <Pagination.Last
        disabled={page === total}
        onClick={() => {
          page !== total && handleClick(total);
        }}
        data-testid='last'
      />
    </Pagination>
  );
};
