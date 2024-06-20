import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { CardList } from '../components';
import { Character } from '../utils';
import { getCharacters, lookupCharacters } from '../api';

const MAX_PAGE_COUNT = 9; // TODO: we need synchronies this with API response

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
      console.log('getData()', pageNumber, dataFromApi);
      setCharacters(dataFromApi);
    }
    getData();
  }, [pageNumber]);

  useEffect(() => {
    async function lookupData() {
      const dataFromApi = await lookupCharacters(searchText);
      console.log('lookupData()', dataFromApi);
      setCharacters(dataFromApi);
    }
    lookupData();
  }, [searchText]);

  function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchText(value);
  }

  const onPrevClick = useCallback(() => setPageNumber((old) => Math.max(old - 1, 1)), []);

  const onNextClick = () => setPageNumber((old) => Math.min(old + 1, MAX_PAGE_COUNT)); // TODO: maybe we need useCallback here, but MAX_PAGE_COUNT could be a state

  const prevButtonDisabled = pageNumber < 2;

  const nextButtonDisabled = pageNumber >= MAX_PAGE_COUNT;

  console.log('rerender: ', { pageNumber, searchText });
  return (
    <div>
      <input value={searchText} onChange={onSearchTextChange} />
      <button disabled={prevButtonDisabled} onClick={onPrevClick}>
        prev
      </button>
      <button disabled={nextButtonDisabled} onClick={onNextClick}>
        next
      </button>
      <button
        onClick={() => {
          setSearchText('dart');
          setPageNumber(1);
        }}
      >
        Search Dart
      </button>
      <CardList characters={characters} />
    </div>
  );
};

export default StarWarsView;
