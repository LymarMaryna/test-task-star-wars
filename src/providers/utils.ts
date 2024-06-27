type MassRecord = {
  min: number;
  max: number;
  text: string;
};

/**
 * Mass ranges for characters
 */
export const MASSES: Record<string, MassRecord> = {
  all: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    text: 'Any weight',
  },
  light: {
    min: 0,
    max: 50,
    text: 'Less than 50kg',
  },
  medium: {
    min: 50,
    max: 100,
    text: 'Between 50kg and 100kg',
  },
  heavy: {
    min: 100,
    max: Number.MAX_SAFE_INTEGER,
    text: 'More than 100kg',
  },
};

/**
 * Gender options for characters
 */
export const GENDERS = {
  all: {
    text: 'All genders',
  },
  female: {
    text: 'Female characters only',
  },
  male: {
    text: 'Male characters only',
  },
};
