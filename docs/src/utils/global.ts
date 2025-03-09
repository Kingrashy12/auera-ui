export const replaceInCode = (
  code: string,
  search: string | RegExp,
  replacement: string
) => {
  return code.replace(search, replacement);
};
