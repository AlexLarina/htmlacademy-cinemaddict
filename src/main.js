import {createFiltersTemplate} from './templates/filters';
import {createFilmsTemplate} from './templates/film-card';

import {createFilters} from './mocks/filters';
import {createFilmCardsArray} from './mocks/film-card';

const MAIN_CARDS_LIMIT = 7;
const TOP_RATED_LIMIT = 2;
const MOST_COMMENTED_LIMIT = 2;

const filters = createFilters();

const mainCards = createFilmCardsArray(MAIN_CARDS_LIMIT);
const topRatedCards = createFilmCardsArray(TOP_RATED_LIMIT);
const mostCommentedCards = createFilmCardsArray(MOST_COMMENTED_LIMIT);

const filterContainerElement = document.querySelector(`.main-navigation`);
const filmsMainContainer = document.querySelector(`.films-list__container`);
const topRatedContainer = document.querySelector(`.films-list__container--rated`);
const mostCommentedContainer = document.querySelector(`.films-list__container--commented`);


filterContainerElement.innerHTML = createFiltersTemplate(filters);

filmsMainContainer.innerHTML = createFilmsTemplate(mainCards);
topRatedContainer.innerHTML = createFilmsTemplate(topRatedCards);
mostCommentedContainer.innerHTML = createFilmsTemplate(mostCommentedCards);

const watchlistFilterElement = document.querySelector(`#watchlist`);
watchlistFilterElement.addEventListener(`click`, () => {
  alert(`works!`);
});
