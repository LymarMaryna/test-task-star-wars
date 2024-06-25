import { useFilteredData } from './FilteredDataProvider';

/**
 * Component for debug filtered data list
 * @component FilteredDataViewer
 */
const FilteredDataViewer = () => {
  const filteredDataValue = useFilteredData();
  return (
    <div>
      <h3>FilteredDataViewer</h3>
      <code>{JSON.stringify(filteredDataValue)}</code>
    </div>
  );
};

export default FilteredDataViewer;
