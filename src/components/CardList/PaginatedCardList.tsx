import { FC, useEffect, useState } from 'react';
import { Character } from '../../utils';
import CardListPage from './CardListPage';

interface Props {
  data: Character[];
}

const PaginatedCardList: FC<Props> = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemPerPage = 9; // TODO: make this dynamic

  useEffect(() => {
    setPageNumber(1);
  }, [data]);

  const PaginationComposition = () => {
    const onFirst = () => {
      setPageNumber(1);
    };
    const onNext = () => {
      setPageNumber((prev) => prev + 1);
    };

    const onPrevious = () => {
      setPageNumber((prev) => prev - 1);
    };
    const onLast = () => {
      setPageNumber(Math.ceil(data.length / itemPerPage));
    };

    return (
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
      )
    );
  };

  return (
    <div>
      <PaginationComposition />
      <CardListPage data={data} itemsPerPage={itemPerPage} pageNumber={pageNumber} />
      <PaginationComposition />
    </div>
  );
};

export default PaginatedCardList;
