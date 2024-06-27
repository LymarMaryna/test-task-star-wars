import { useFilteredData } from '../providers/FilteredDataProvider';

/**
 * Component for debug filtered data list. It is not used in the application.
 * @component FilteredDataViewer
 */
const FilteredDataDebug = () => {
  const filteredDataValue = useFilteredData();
  return (
    <div>
      <h3>FilteredDataViewer</h3>
      <code>{JSON.stringify(filteredDataValue)}</code>
    </div>
  );
};

export default FilteredDataDebug;
