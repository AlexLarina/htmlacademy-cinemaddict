const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const createFiltersTemplate = (filters) => (
    `<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filters
        .map((filter) => (
            `<a href="#${filter.name}" class="main-navigation__item" id="${filter.name}">${capitalize(filter.name)}
                <span class="main-navigation__item-count">${filter.count}</span>
            </a>`
        ))
        .join(``)
    }
    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`
);
