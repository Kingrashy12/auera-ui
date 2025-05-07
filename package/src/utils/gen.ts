/**
 * Generates a random numeric ID of the specified length, ensuring uniqueness.
 *
 * @param {number} length - The length of the generated ID.
 * @param {Set<string>} [existingIds] - A Set of previously generated IDs to check against.
 * @returns {string} A randomly generated unique numeric string.
 * @throws {Error} If the length is less than or equal to 0.
 *
 * @example
 * console.log(generateId(6)); // e.g., "839214"
 */
export const generateId = (length: number): string => {
  if (length <= 0) throw new Error("Length must be greater than 0");

  const existingIds = new Set<string>();

  const numbers = "0123456789";

  let id: string;
  // Keep generating new IDs until it's unique
  do {
    id = "";
    for (let i = 0; i < length; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  } while (existingIds.has(id)); // Check for uniqueness

  existingIds.add(id); // Add the new ID to the set of existing IDs
  return id;
};

/**
 * Generates a random alphanumeric UUID of the specified length, ensuring uniqueness.
 *
 * @param {number} length - The length of the generated UUID.
 * @param {Set<string>} [existingIds] - A Set of previously generated UUIDs to check against.
 * @returns {string} A randomly generated unique alphanumeric string.
 * @throws {Error} If the length is less than or equal to 0.
 *
 * @example
 * console.log(generateUUID(8)); // e.g., "A9XbT7P3"
 */
export const generateUUID = (length: number): string => {
  if (length <= 0) throw new Error("Length must be greater than 0");

  const existingIds = new Set<string>();

  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let uuid: string;
  // Keep generating new UUIDs until it's unique
  do {
    uuid = "";
    for (let i = 0; i < length; i++) {
      uuid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (existingIds.has(uuid)); // Check for uniqueness

  existingIds.add(uuid); // Add the new UUID to the set of existing UUIDs
  return uuid;
};
