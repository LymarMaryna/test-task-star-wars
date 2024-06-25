import { useFilteredData } from './FilteredDataProvider';
import { CardList, PaginatedCardList } from '.';

/**
 * Renders CardList with character information
 * @param noPagination - If true, renders CardList without pagination
 */
const DataView = ({ noPagination }: { noPagination: boolean }) => {
  const { data } = useFilteredData();
  return noPagination ? <CardList characters={data} /> : <PaginatedCardList data={data} />;
};

export default DataView;
