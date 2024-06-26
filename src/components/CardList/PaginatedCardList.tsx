import { FC, useCallback, useEffect, useState } from 'react';
import { Character } from '../../utils';
import CardListPage from './CardListPage';

const ITEMS_PER_PAGE = 12;

interface Props {
  data: Character[];
}

/**
 * Renders a paginated list of cards with character information
 * @component PaginatedCardList
 * @param {Character[]} data - Array of characters to render
 */
const PaginatedCardList: FC<Props> = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemPerPage = ITEMS_PER_PAGE; // TODO: make this dynamic

  useEffect(() => {
    setPageNumber(1);
  }, [data]);

  const onFirst = useCallback(() => {
    setPageNumber(1);
  }, []);

  const onNext = useCallback(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  const onPrevious = useCallback(() => {
    setPageNumber((prev) => prev - 1);
  }, []);

  const onLast = useCallback(() => {
    setPageNumber(Math.ceil(data.length / itemPerPage));
  }, [data.length, itemPerPage]);

  // Internal component to render pagination only if needed
  const PaginationComposition = () =>
    data.length > itemPerPage && (
      <div>
        <button onClick={onFirst}>First</button>
        <button onClick={onPrevious} disabled={pageNumber === 1}>
          Prev
        </button>
        <span>{pageNumber}</span> of <span>{Math.ceil(data.length / itemPerPage)}</span>
        <button onClick={onNext} disabled={pageNumber * itemPerPage >= data.length}>
          Next
        </button>
        <button onClick={onLast}>Last</button>
      </div>
    );

  return (
    <div>
      <PaginationComposition />
      <CardListPage data={data} itemsPerPage={itemPerPage} pageNumber={pageNumber} />
      <PaginationComposition />
    </div>
  );
};

export default PaginatedCardList;
