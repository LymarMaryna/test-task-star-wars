import { ChakraProvider, Heading, Stack, extendTheme, withDefaultProps } from '@chakra-ui/react';
import { FilterView, SearchView, DataView } from './components';
import DataProvider from './providers/DataProvider';
import FilteredDataProvider from './providers/FilteredDataProvider';
import { TypeAnimation } from 'react-type-animation';

const customTheme = extendTheme(
  withDefaultProps({
    defaultProps: {
      variant: 'outline',
    },
    components: ['Input', 'Button'],
  })
);

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <DataProvider>
        <FilteredDataProvider>
          <TypeAnimation
            sequence={[500, 'Star Wars Characters', 1000, 'Star Wars AllianceBook', 1000]}
            wrapper="h3"
            speed={50}
            style={{ fontSize: '2em', textAlign: 'center' }}
            repeat={0}
          />
          <Stack alignItems="center" direction="column" width="100%" p={5}>
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
