import getGameTemplate from '../index.js';
import getRandomInt from '../generator.js';

/** Поиск наибольшего общего делителя. */
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = `${gcd(a, b)}`;

  return { question, correctAnswer };
};

export default () => getGameTemplate('Find the greatest common divisor of given numbers.', getGameData);
