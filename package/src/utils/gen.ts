export const generateId = (length: number): string => {
  const numbers = "0123456789";
  return Array.from({ length }, () =>
    numbers.charAt(Math.floor(Math.random() * numbers.length))
  ).join("");
};

export const generateUUID = (length: number) => {
  const char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () => {
    char.charAt(Math.floor(Math.random() * char.length));
  }).join("");
};
