import Restaurant from '../types/restaurant';

const isEqual = (a: Restaurant, b: Restaurant) => {
  return a.name === b.name && a.city === b.city;
};

export default isEqual;
