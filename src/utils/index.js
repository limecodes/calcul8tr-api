export const isOdd = (value) => (value !== 0 ? value % 2 === 1 : false);
export const isFloat = (value) => Number(value) === value && value % 1 !== 0;
