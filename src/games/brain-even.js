import game, { getRandomInt } from '../index.js';

/** Проверка числа на чётность. */
const isEven = (num) => num % 2 === 0;

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

const brainEvenGame = game('Answer "yes" if the number is even, otherwise answer "no".', getGameData);

export default brainEvenGame;
