import { useMemo } from 'react';
import CardList from './CardListChakra';
import { Character } from '../../providers';

interface Props {
  data: Character[];
  itemsPerPage: number;
  pageNumber: number;
}

/**
 * Renders single page of characters depending on the page number and items per page
 * @component CardListPage
 * @param {Character[]} data - Array of All characters, we need to slice it
 * @param {number} pageNumber - The page number
 * @param {number} itemsPerPage - Number of items per page
 */
const CardListPage = ({ data, itemsPerPage, pageNumber }: Props) => {
  const itemsToRender = useMemo(
    // TODO: Verify do we need to use useMemo here
    () => data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage),
    [data, itemsPerPage, pageNumber]
  );

  return <CardList characters={itemsToRender} />;
};

export default CardListPage;
