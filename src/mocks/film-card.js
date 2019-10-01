import {getRandomArrayItem} from '../lib/utils';

const POSTERS = [`three-friends`, `moonrise`, `fuga-da-new-york`, `blue-blazes`, `accused`, `blackmail`];

const createCard = (posters) => {
  return {
    title: `The Assassination Of Jessie James By The Coward Robert Ford`,
    rating: 9.8,
    info: {
      year: 2018,
      duration: `1h&nbsp;13m`,
      genre: `Comedy`
    },
    poster: `./images/posters/${getRandomArrayItem(posters)}.jpg`,
    description: `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`,
    comments: 13,
    hasControls: true
  };
};

export const createFilmCardsArray = (limit) => [...(new Array(limit))].map(() => createCard(POSTERS));

