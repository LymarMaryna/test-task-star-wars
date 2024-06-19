import { useEffect, useState } from 'react';
import { CardList } from '../components';
import { Character } from '../utils';
import { getCharacters } from '../api';

/**
 * StarWars explorer
 */
const StarWarsView = () => {
  const [characters, setCharacters] = useState<Character[] | undefined>();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function getData() {
      const dataFromApi = await getCharacters(pageNumber, searchText);
      console.log('getData()', dataFromApi);
      setCharacters(dataFromApi);
    }
    getData();
  }, [pageNumber, searchText]);

  return (
    <div>
      <button onClick={() => setPageNumber(pageNumber + 1)}>next</button>
      <button onClick={() => setSearchText('dart')}>Search Dart</button>
      <CardList characters={characters} />
    </div>
  );
};

export default StarWarsView;
