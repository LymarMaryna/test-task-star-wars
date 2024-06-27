import { Spinner, Stack, Text } from '@chakra-ui/react';
import { CardList, PaginatedCardList } from './CardList';
import { useFilteredData } from '../providers/FilteredDataProvider';

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

  if (!data.length) {
    // Show message when no data is found
    return (
      <Stack direction="column" justify="center" height="75vh">
        <Text fontSize="2xl" fontWeight="bold" color="gray.500">
          No characters found
        </Text>
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
