const FILTER_NAMES = [`watchlist`, `history`, `favorites`];

const FILMS_AMOUNT = {
    MIN: 0,
    MAX: 100
};
const getRandomFromRange = (min, max) => Math.round(Math.random() * (max - min) + min);

export const createFilters = () => (
    FILTER_NAMES.map((name) => {
        return {
            name: name,
            count: getRandomFromRange(FILMS_AMOUNT.MIN, FILMS_AMOUNT.MAX)
        }
    })
); 