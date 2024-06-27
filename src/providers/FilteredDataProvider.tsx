import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from 'react';
import { FilterOptions, FilteredData } from './types';
import { useData } from './DataProvider';
import { MASSES } from './utils';

const INITIAL_STATE: FilteredData = {
  data: [],
  isDataLoaded: false, // Data is not loaded by default
  textSearch: '',
  setTextSearch: (_newTextSearch: string) => console.log('setTextSearch not implemented yet!', _newTextSearch),
  filterOptions: { gender: 'all', mass: 'all' },
  setFilterOptions: (_newFilterOptions: FilterOptions) =>
    console.log('setFilterOptions not implemented yet!', _newFilterOptions),
};

export const FilteredDataContext = createContext(INITIAL_STATE);

/**
 * Hook to use data from the FilteredDataProvider context
 * @returns {FilteredData} - Object with filtered data, text search, filter options and setters
 * @example const { data, textSearch, setTextSearch, filterOptions, setFilterOptions } = useFilteredData();
 */
export function useFilteredData(): FilteredData {
  return useContext(FilteredDataContext);
}

/**
 * Provides filtered data to all components inside
 * @provider FilteredDataProvider
 */
const FilteredDataProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const fullData = useData();
  const [textSearch, setTextSearch] = useState<string>(INITIAL_STATE.textSearch);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(INITIAL_STATE.filterOptions);

  const isDataLoaded = fullData?.length > 0;

  const contextValue = {
    data: fullData
      .filter((character) => {
        // Filter by text search
        return character.name.toLowerCase().includes(textSearch.toLowerCase());
      })
      .filter((character) => {
        // Filter by gender
        return filterOptions.gender === 'all' || character.gender?.toLowerCase() === filterOptions.gender;
      })
      .filter((character) => {
        // Filter by mass
        if (filterOptions.mass === 'all') {
          return true; // Skip mass filter
        }

        const mass = parseFloat(character?.mass || '');
        if (isNaN(mass)) {
          return false; // Skip characters with unknown mass
        }

        console.log('mass', mass, filterOptions.mass);

        // Verify mass range
        switch (filterOptions.mass) {
          case 'light':
            return mass < MASSES.light.max;
          case 'medium':
            return mass >= MASSES.medium.min && mass <= MASSES.medium.max;
          case 'heavy':
            return mass > MASSES.heavy.min;
          default:
            return false;
        }
      }),
    isDataLoaded,
    textSearch,
    setTextSearch,
    filterOptions,
    setFilterOptions,
  };

  return <FilteredDataContext.Provider value={contextValue}>{children}</FilteredDataContext.Provider>;
};

export default FilteredDataProvider;
