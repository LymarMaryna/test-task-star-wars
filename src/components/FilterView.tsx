import { ChangeEvent } from 'react';
import { FilterOptions, useFilteredData } from './FilteredDataProvider';

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

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const genderOptions: FilterOptions['gender'][] = ['all', 'female', 'male'];
  const massOptions: FilterOptions['mass'][] = ['all', 'light', 'medium', 'heavy'];

  return (
    <div>
      <select onChange={onGenderChange}>
        {genderOptions.map((genderOption) => (
          <option key={'gender_' + genderOption} value={genderOption}>
            {capitalizeFirstLetter(genderOption)}
          </option>
        ))}
      </select>
      <select onChange={onMassChange}>
        {massOptions.map((massOption) => (
          <option key={'mass_' + massOption} value={massOption}>
            {capitalizeFirstLetter(massOption)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterView;
