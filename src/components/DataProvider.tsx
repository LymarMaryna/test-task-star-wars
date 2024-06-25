import { FunctionComponent, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Character } from '../utils';
import { getAllCharacters } from '../api';

const INITIAL_STATE: Character[] = [];

export const DataContext = createContext(INITIAL_STATE);

export function useData(): Character[] {
  return useContext(DataContext);
}

/**
 * Get data from api and provide it to the children
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
