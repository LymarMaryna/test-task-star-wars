import { ChangeEvent } from 'react';
import { useFilteredData } from './FilteredDataProvider';

const SearchView = () => {
  const { textSearch, setTextSearch } = useFilteredData();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(event.target.value);
  };

  return (
    <div>
      <input value={textSearch} onChange={onChange} />
    </div>
  );
};

export default SearchView;
