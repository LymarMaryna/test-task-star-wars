import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { CardList, TextSearch } from '../components';
import { Character } from '../utils';
import { getAllCharacters } from '../api';

const ITEMS_PER_PAGE = 20;

/**
 * StarWars explorer
 */
const StarWarsView2 = () => {
  const [allCharacters, setAllCharacters] = useState<Character[] | undefined>();
  const [characters, setCharacters] = useState<Character[] | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function getAllData() {
      const dataFromApi = await getAllCharacters(searchText);
      setAllCharacters(dataFromApi);
      setCurrentPage(1);
    }
    getAllData();
  }, [searchText]);

  useEffect(() => {
    setTotalPages((old) => {
      return allCharacters?.length ? Math.ceil(allCharacters.length / ITEMS_PER_PAGE) : old;
    });

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    setCharacters((old) => {
      const newCharacters = allCharacters?.slice(startIndex, endIndex);
      if (newCharacters) {
        return newCharacters;
      }

      return old;
    });
  }, [allCharacters, currentPage]);

  function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchText(value);
  }

  const onPrevClick = useCallback(() => setCurrentPage((old) => Math.max(old - 1, 1)), []);

  const onNextClick = () => setCurrentPage((old) => Math.min(old + 1, totalPages));

  const prevButtonDisabled = currentPage < 2;

  const nextButtonDisabled = currentPage >= totalPages;

  console.log('<StarWarsView2/> render: ', characters);

  return (
    <div>
      <TextSearch value={searchText} onChange={onSearchTextChange} />
      <button disabled={prevButtonDisabled} onClick={onPrevClick}>
        prev
      </button>
      <button disabled={nextButtonDisabled} onClick={onNextClick}>
        next
      </button>
      <div>
        <span>page: {currentPage}</span> / <span>from: {totalPages}</span>
      </div>
      <CardList characters={characters} />
    </div>
  );
};

export default StarWarsView2;
