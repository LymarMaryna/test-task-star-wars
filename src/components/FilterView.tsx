import { ChangeEvent } from 'react';
import { Select, Stack } from '@chakra-ui/react';
import { FilterOptions, GENDERS, MASSES, useFilteredData } from '../providers';

const GENDER_OPTIONS: FilterOptions['gender'][] = ['all', 'female', 'male'];
const MASS_OPTIONS: FilterOptions['mass'][] = ['all', 'light', 'medium', 'heavy'];

/**
 * Renders a filter with 2 dropdowns
 * @component FilterView
 */
const FilterView = () => {
  const { isDataLoaded, filterOptions, setFilterOptions } = useFilteredData();

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

  const inputDisabled = !isDataLoaded;

  return (
    <Stack direction="row">
      <Select disabled={inputDisabled} onChange={onGenderChange}>
        {GENDER_OPTIONS.map((item) => (
          <option key={`gender-${item}`} value={item}>
            {GENDERS?.[item]?.text}
          </option>
        ))}
      </Select>

      <Select disabled={inputDisabled} onChange={onMassChange}>
        {MASS_OPTIONS.map((item) => (
          <option key={`mass-${item}`} value={item}>
            {MASSES?.[item]?.text}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default FilterView;
