/**
 * Sleep for a given number of milliseconds
 * @param {number} ms - Number of milliseconds to sleep
 * @example await sleep(1000); // Sleep for 1 second
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Capitalize the first letter of a string
 * @param {string} s - String to capitalize
 * @returns {string} - String with first letter capitalized
 */
export const capitalizeFirstLetter = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
