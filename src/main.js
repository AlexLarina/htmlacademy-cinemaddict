import {createFiltersTemplate} from './templates/filters';
import {createFilmsTemplate} from './templates/film-card';

import {createFilters} from './mocks/filters';


const filters = createFilters();

const filterContainerElement = document.querySelector(`.main-navigation`)

filterContainerElement.innerHTML = createFiltersTemplate(filters);

const filmCardArray = [{
    title: `The Assassination Of Jessie James By The Coward Robert Ford`,
    rating: 9.8,
    info: {
        year: 2018,
        duration: `1h&nbsp;13m`,
        genre: `Comedy`
    },
    poster: `./images/posters/three-friends.jpg`,
    description: `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`,
    comments: 13,
    hasControls: true
}];

console.log(createFilmsTemplate(filmCardArray));


/* <article class="film-card">
          <h3 class="film-card__title">Incredibles 2</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/moonrise.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priests Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article> */