const createRandomFromRange = (min, max) => Math.ceil(Math.random() * (max - min) + min);
const getRandomArrayItem = (array) => array[createRandomFromRange(0, array.length - 1)];
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export {createRandomFromRange, getRandomArrayItem, capitalize};
