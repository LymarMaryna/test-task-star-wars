import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Character } from '../utils';
import { useData } from './DataProvider';

export type FilterOptions = {
  gender: 'all' | 'female' | 'male';
  mass: 'all' | 'light' | 'medium' | 'heavy';
};

const MASSES = {
  light: 50,
  medium: 100,
  heavy: Number.MAX_SAFE_INTEGER,
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
  setTextSearch: (_newTextSearch: string) => {},
  filterOptions: { gender: 'all', mass: 'all' },
  setFilterOptions: (_options: FilterOptions) => {},
};

export const FilteredDataContext = createContext(INITIAL_STATE);

export function useFilteredData(): FilteredData {
  return useContext(FilteredDataContext);
}

const FilteredDataProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  // const [allCharacters, setAllCharacters] = useState<Character[]>(INITIAL_STATE);
  const fullData = useData();
  const [textSearch, setTextSearch] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(INITIAL_STATE.filterOptions);
  //  const [filteredData, setFilteredData] = useState(fullData);

  console.log('fullData', fullData);
  const filteredDataValue = {
    data: fullData
      .filter((character) => character.name.toLowerCase().includes(textSearch.toLowerCase()))
      .filter((character) => {
        // filter by gender
        return filterOptions.gender === 'all' || character.gender?.toLowerCase() === filterOptions.gender;
      })
      .filter((character) => {
        // filter by mass
        if (filterOptions.mass === 'all') {
          return true;
        }

        const mass = parseFloat(character?.mass || '');
        if (isNaN(mass)) {
          return false;
        }

        // filter number mass values
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

  useEffect(() => {}, [textSearch]);

  console.log('filteredDataValue', filteredDataValue);

  // useEffect(() => {
  //   async function getAllData() {
  //     const dataFromApi = await getAllCharacters();
  //     setAllCharacters(dataFromApi);
  //   }
  //   getAllData();
  // }, []);

  return <FilteredDataContext.Provider value={filteredDataValue}>{children}</FilteredDataContext.Provider>;
};

export default FilteredDataProvider;
