// Frontend version of Character type from the Star Wars API
export type Character = {
  name: string;
  avatar: string;
  gender?: string;
  mass?: string;
  height?: string;
};

// Filter options schema
type GenderOptions = 'all' | 'female' | 'male';
type MassOptions = 'all' | 'light' | 'medium' | 'heavy';
export type FilterOptions = {
  gender: GenderOptions;
  mass: MassOptions;
};

// Schema for Filtered Data Provider  with filtered data, text search, filter options and setters
export interface FilteredData {
  data: Character[];
  isDataLoaded: boolean;
  textSearch: string;
  setTextSearch: (newTextSearch: string) => void;
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
}
