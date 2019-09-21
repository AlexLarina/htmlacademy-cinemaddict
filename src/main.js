import {createFiltersTemplate} from './templates/filters';

import {createFilters} from './mocks/filters';

const filters = createFilters();

const filterContainerElement = document.querySelector(`.main-navigation`)

filterContainerElement.innerHTML = createFiltersTemplate(filters);
