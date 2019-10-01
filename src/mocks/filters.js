import {createRandomFromRange} from '../lib/utils';

const FILTER_NAMES = [`watchlist`, `history`, `favorites`];

const FILMS_AMOUNT = {
  MIN: 0,
  MAX: 100
};

export const createFilters = () => (
  FILTER_NAMES.map((name) => {
    return {
      name,
      count: createRandomFromRange(FILMS_AMOUNT.MIN, FILMS_AMOUNT.MAX)
    };
  })
);
