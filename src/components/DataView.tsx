import { CardList, PaginatedCardList } from './CardList';
import { useFilteredData } from '../providers/FilteredDataProvider';

/**
 * Renders Card List with characters information
 * @param noPagination - When true, renders full Card List without pagination
 */
const DataView = ({ noPagination }: { noPagination: boolean }) => {
  const { data } = useFilteredData();
  return noPagination ? <CardList characters={data} /> : <PaginatedCardList data={data} />;
};

export default DataView;
