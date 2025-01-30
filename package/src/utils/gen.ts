export const generateId = (length: number) => {
  const numbers = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result =
      result + numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
};
