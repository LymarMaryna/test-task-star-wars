import { CardList, PaginatedCardList } from './CardList';
import { useFilteredData } from '../providers/FilteredDataProvider';
import { Spinner, Stack } from '@chakra-ui/react';

/**
 * Renders Card List with characters information
 * @param noPagination - When true, renders full Card List without pagination
 */
const DataView = ({ noPagination }: { noPagination: boolean }) => {
  const { data, isDataLoaded } = useFilteredData();

  if (!isDataLoaded) {
    // Show spinner while loading
    return (
      <Stack direction="column" justify="center" height="75vh">
        <Spinner size="xl" />
      </Stack>
    );
  }

  return noPagination ? (
    <CardList characters={data} /> // Single page only
  ) : (
    <PaginatedCardList data={data} /> // Multiple pages
  );
};

export default DataView;
