import { FilterView, SearchView, DataView } from './components';
import DataProvider from './components/DataProvider';
import FilteredDataProvider from './components/FilteredDataProvider';

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <DataProvider>
      <FilteredDataProvider>
        <SearchView />
        <FilterView />
        <DataView noPagination={false} />
      </FilteredDataProvider>
    </DataProvider>
  );
};

export default MainApp;
