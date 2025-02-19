/**
 * Generates a random numeric ID of the specified length.
 *
 * @param {number} length - The length of the generated ID.
 * @returns {string} A randomly generated numeric string.
 *
 * @example
 * console.log(generateId(6)); // e.g., "839214"
 */
export const generateId = (length: number): string => {
  const numbers = "0123456789";
  return Array.from({ length }, () =>
    numbers.charAt(Math.floor(Math.random() * numbers.length))
  ).join("");
};

/**
 * Generates a random alphanumeric UUID of the specified length.
 *
 * @param {number} length - The length of the generated UUID.
 * @returns {string} A randomly generated alphanumeric string.
 *
 * @example
 * console.log(generateUUID(8)); // e.g., "A9XbT7P3"
 */
export const generateUUID = (length: number) => {
  const char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () => {
    char.charAt(Math.floor(Math.random() * char.length));
  }).join("");
};
