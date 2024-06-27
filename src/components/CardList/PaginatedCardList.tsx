import { FC, useCallback, useEffect, useState } from 'react';
import { Character } from '../../providers';
import CardListPage from './CardListPage';
import { Button, Show, Stack } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

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
      <Stack direction="row" justifyContent="center" m={4}>
        <Show above="sm">
          <Button onClick={onFirst} leftIcon={<ArrowLeftIcon />}>
            First
          </Button>
        </Show>

        <Button onClick={onPrevious} isDisabled={pageNumber === 1} leftIcon={<ArrowBackIcon />}>
          Prev
        </Button>

        <Button>
          {pageNumber} of {Math.ceil(data.length / itemPerPage)}
        </Button>

        <Button onClick={onNext} isDisabled={pageNumber * itemPerPage >= data.length} rightIcon={<ArrowForwardIcon />}>
          Next
        </Button>

        <Show above="sm">
          <Button onClick={onLast} rightIcon={<ArrowRightIcon />}>
            Last
          </Button>
        </Show>
      </Stack>
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
