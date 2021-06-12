import game, { getRandomInt } from '../index.js';

/** Простое ли число. */
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
};

const brainPrimeGame = game('Answer "yes" if given number is prime. Otherwise answer "no".', getGameData);

export default brainPrimeGame;
