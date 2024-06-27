import { ChakraProvider, Stack } from '@chakra-ui/react';
import { FilterView, SearchView, DataView } from './components';
import DataProvider from './providers/DataProvider';
import FilteredDataProvider from './providers/FilteredDataProvider';

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ChakraProvider>
      <DataProvider>
        <FilteredDataProvider>
          <Stack
            alignItems="center"
            direction="column"
            width="100%"
            // backgroundColor="yellow"
          >
            <Stack direction="row" justifyContent="center" wrap="wrap">
              <SearchView />
              <FilterView />
            </Stack>
            <DataView noPagination={false} />
          </Stack>
        </FilteredDataProvider>
      </DataProvider>
    </ChakraProvider>
  );
};

export default MainApp;
