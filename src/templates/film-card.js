const createFilmCardTemplate = (film) => (
  `<article class="film-card">
        <h3 class="film-card__title">${film.title}</h3>
        <p class="film-card__rating">${film.rating}</p>
        <p class="film-card__info">
            <span class="film-card__year">${film.info.year}</span>
            <span class="film-card__duration">${film.info.duration}</span>
            <span class="film-card__genre">${film.info.genre}</span>
        </p>
        <img src="${film.poster}" alt="${film.title}" class="film-card__poster">
        <p class="film-card__description">${film.description}</p>
        <button class="film-card__comments">${film.comments} comments</button>

        ${ film.hasControls ? `<form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
        </form>` : `` }
    </article>`
);

export const createFilmsTemplate = (films) => (
  films.map((film) => createFilmCardTemplate(film)).join(``)
);
