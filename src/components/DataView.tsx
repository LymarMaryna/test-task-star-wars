import { CardList, PaginatedCardList } from './CardList';
import { useFilteredData } from './FilteredDataProvider';

/**
 * Renders CardList with character information
 * @param noPagination - If true, renders CardList without pagination
 */
const DataView = ({ noPagination }: { noPagination: boolean }) => {
  const { data } = useFilteredData();
  return noPagination ? <CardList characters={data} /> : <PaginatedCardList data={data} />;
};

export default DataView;
