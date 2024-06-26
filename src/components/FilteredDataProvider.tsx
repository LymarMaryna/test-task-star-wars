import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from 'react';
import { Character } from '../utils';
import { useData } from './DataProvider';

export type FilterOptions = {
  gender: 'all' | 'female' | 'male';
  mass: 'all' | 'light' | 'medium' | 'heavy';
};

interface FilteredData {
  data: Character[];
  textSearch: string;
  setTextSearch: (newTextSearch: string) => void;
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
}

const INITIAL_STATE: FilteredData = {
  data: [],
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

  const filteredDataValue = {
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

        // Verify mass range
        switch (filterOptions.mass) {
          case 'light':
            return mass < 50;
          case 'medium':
            return mass >= 50 && mass <= 100;
          case 'heavy':
            return mass > 100;
          default:
            return false;
        }
      }),
    textSearch,
    setTextSearch,
    filterOptions,
    setFilterOptions,
  };

  return <FilteredDataContext.Provider value={filteredDataValue}>{children}</FilteredDataContext.Provider>;
};

export default FilteredDataProvider;
