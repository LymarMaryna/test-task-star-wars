import { ChakraProvider, Stack, extendTheme } from '@chakra-ui/react';
import { FilterView, SearchView, DataView } from './components';
import DataProvider from './providers/DataProvider';
import FilteredDataProvider from './providers/FilteredDataProvider';
import Header from './components/Header';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
});

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <DataProvider>
        <FilteredDataProvider>
          <Stack alignItems="center" direction="column" width="100%" p={5}>
            <Header />
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
