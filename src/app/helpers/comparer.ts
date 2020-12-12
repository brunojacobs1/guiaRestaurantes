import Restaurant from '../types/restaurant';

const isEqual = (a: Restaurant, b: Restaurant) => {
  return (
    a.name.toLowerCase() === b.name.toLowerCase() &&
    a.city.toLowerCase() === b.city.toLowerCase()
  );
};

export default isEqual;
