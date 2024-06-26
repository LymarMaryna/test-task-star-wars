import { ChangeEvent } from 'react';
import { FilterOptions, useFilteredData } from './FilteredDataProvider';
import { Select, Stack } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '../utils';

const GENDERS: FilterOptions['gender'][] = ['all', 'female', 'male'];
const MASSES: FilterOptions['mass'][] = ['all', 'light', 'medium', 'heavy'];

/**
 * Renders a filter with 2 dropdowns
 * @component FilterView
 */
const FilterView = () => {
  const { filterOptions, setFilterOptions } = useFilteredData();

  const onGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value as FilterOptions['gender'];
    const options: FilterOptions = { ...filterOptions, gender };
    setFilterOptions(options);
  };

  const onMassChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const mass = event.target.value as FilterOptions['mass'];
    const options: FilterOptions = { ...filterOptions, mass };
    setFilterOptions(options);
  };

  return (
    <Stack direction="row">
      <Select onChange={onGenderChange}>
        {GENDERS.map((item) => (
          <option key={`gender-${item}`} value={item}>
            {capitalizeFirstLetter(item)}
          </option>
        ))}
      </Select>

      <Select onChange={onMassChange}>
        {MASSES.map((item) => (
          <option key={`mass-${item}`} value={item}>
            {capitalizeFirstLetter(item)}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default FilterView;
