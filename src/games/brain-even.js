import getGameTemplate from '../index.js';
import getRandomInt from '../generator.js';

/** Проверка числа на чётность. */
const isEven = (num) => num % 2 === 0;

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => getGameTemplate('Answer "yes" if the number is even, otherwise answer "no".', getGameData);
