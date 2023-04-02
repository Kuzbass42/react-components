export const searchString = (target: string, searchString: string): boolean => {
  return target.toLowerCase().includes(searchString.toLowerCase());
};
