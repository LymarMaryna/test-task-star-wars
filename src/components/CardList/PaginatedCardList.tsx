import { FC, useCallback, useEffect, useState } from 'react';
import { Character } from '../../providers';
import CardListPage from './CardListPage';
import { Box, Button, Show, Stack } from '@chakra-ui/react';
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
      <Stack direction="row" justifyContent="center" alignItems="center" m={4}>
        <Show above="sm">
          <Button bg="white" leftIcon={<ArrowLeftIcon />} onClick={onFirst}>
            First
          </Button>
        </Show>

        <Button
          bg="white"
          isDisabled={pageNumber === 1}
          leftIcon={
            <ArrowBackIcon
            // TODO: Add aria-label to the button
            // TODO: refactor with react-icons
            />
          }
          onClick={onPrevious}
        >
          Prev
        </Button>

        <Box>
          Page <b>{pageNumber}</b> of <b>{Math.ceil(data.length / itemPerPage)}</b>
        </Box>

        <Button
          bg="white"
          isDisabled={pageNumber * itemPerPage >= data.length}
          rightIcon={
            <ArrowForwardIcon
            // TODO: Add aria-label to the button
            // TODO: refactor with react-icons
            />
          }
          onClick={onNext}
        >
          Next
        </Button>

        <Show above="sm">
          <Button bg="white" rightIcon={<ArrowRightIcon />} onClick={onLast}>
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
