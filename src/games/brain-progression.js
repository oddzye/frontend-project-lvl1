import getGameTemplate from '../index.js';
import getRandomInt from '../generator.js';

const getProgressionWithHiddenEl = (progression, indexToHide) => {
  const result = [...progression];
  result[indexToHide] = '..';
  return result;
};

const createProgression = (elementsCount, firstElement, step) => {
  const result = [];
  let currentElement = firstElement;

  for (let i = 1; i <= elementsCount; i += 1) {
    result.push(currentElement);
    currentElement += step;
  }

  return result;
};

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const elementsCount = 10;
  const firstElement = getRandomInt(1, 100);
  const step = getRandomInt(1, 100);
  const progression = createProgression(elementsCount, firstElement, step);
  const indexToHide = getRandomInt(0, progression.length - 1);
  const correctAnswer = `${progression[indexToHide]}`;
  const progressionWithHiddenEl = getProgressionWithHiddenEl(progression, indexToHide);

  return { question: progressionWithHiddenEl.join(' '), correctAnswer };
};

export default () => getGameTemplate('What number is missing in the progression?', getGameData);
