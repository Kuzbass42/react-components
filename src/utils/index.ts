export const searchString = (
  target: string,
  searchString: string,
  caseInsensitive = false
): boolean => {
  return caseInsensitive
    ? target.toLowerCase().includes(searchString.toLowerCase())
    : target.includes(searchString);
};
