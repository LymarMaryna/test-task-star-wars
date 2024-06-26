import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Character } from '../utils';
import { getAllCharacters } from '../api';

const INITIAL_STATE: Character[] = [];

export const DataContext = createContext(INITIAL_STATE);

/**
 * Hook to use data from the DataProvider context
 * @returns {Character[]} - Array of characters
 */
export function useData(): Character[] {
  return useContext(DataContext);
}

/**
 * Provides data to all components inside
 * @provider DataProvider
 */
const DataProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState<Character[]>(INITIAL_STATE);

  useEffect(() => {
    async function getAllData() {
      const dataFromApi = await getAllCharacters();
      setAllCharacters(dataFromApi);
    }
    getAllData();
  }, []);

  return <DataContext.Provider value={allCharacters}>{children}</DataContext.Provider>;
};

export default DataProvider;
