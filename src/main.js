import {createRandomFromRange} from './lib/utils';

import {createFiltersTemplate} from './templates/filters';
import {createFilmsTemplate} from './templates/film-card';

import {createFilters} from './mocks/filters';
import {createFilmCardsArray} from './mocks/film-card';

const MAIN_CARDS_LIMIT = 7;
const TOP_RATED_LIMIT = 2;
const MOST_COMMENTED_LIMIT = 2;

const updateLimits = {
  MIN: 1,
  MAX: 7
};

const removeChildNodes = (parentNode) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
};

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

const updateMainContainer = (container, limits) => {
  removeChildNodes(container);
  const limit = createRandomFromRange(limits.MIN, limits.MAX);
  container.innerHTML = createFilmsTemplate(createFilmCardsArray(limit));
};

const watchlistFilterElement = document.querySelector(`#watchlist`);
watchlistFilterElement.addEventListener(`click`, () => {
  updateMainContainer(filmsMainContainer, updateLimits);
});

const historyFilterElement = document.querySelector(`#history`);
historyFilterElement.addEventListener(`click`, () => {
  updateMainContainer(filmsMainContainer, updateLimits);
});

const favoritesFilterElement = document.querySelector(`#favorites`);
favoritesFilterElement.addEventListener(`click`, () => {
  updateMainContainer(filmsMainContainer, updateLimits);
});
