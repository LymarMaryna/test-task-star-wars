import { Character } from '../../utils';
import CardList from './CardList';

interface Props {
  data: Character[];
  pageNumber: number;
  itemsPerPage: number;
}

/**
 * Renders one page with characters
 * @param data - Array of characters to render
 * @param pageNumber - Current page number
 * @param itemsPerPage - Number of items to render per page
 */
const CardListPage = ({ data, pageNumber, itemsPerPage }: Props) => {
  const itemsToRender = data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

  return <CardList characters={itemsToRender} />;
};

export default CardListPage;
