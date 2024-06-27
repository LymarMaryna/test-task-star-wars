import { ChangeEvent, useCallback } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { useFilteredData } from '../providers/FilteredDataProvider';

/**
 * Renders a Search input
 * @component SearchView
 */
const SearchView = () => {
  const { textSearch, setTextSearch } = useFilteredData();

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTextSearch(event.target.value);
    },
    [setTextSearch]
  );

  return (
    <Box
      flexGrow={2} // Take as much space as possible
    >
      <Input placeholder="Enter text to search here" value={textSearch} onChange={onChange} />
    </Box>
  );
};

export default SearchView;
