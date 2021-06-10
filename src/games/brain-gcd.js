import game from '../index.js';

/** Получение вступительного сообщения игры. */
const getInfoMessage = () => console.log('Find the greatest common divisor of given numbers.');

/** Генерация случайного числа от 1 до 100. */
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

/** Генерация вопроса. */
const getQuestion = () => `${generateRandomNumber()} ${generateRandomNumber()}`;

/** Поиск наибольшего общего делителя. */
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

/** Получение корректного ответа на вопрос. */
const getCorrectAnswer = (question) => {
  const [a, b] = question.split(' ').map(Number);
  const divisor = gcd(a, b);

  return `${divisor}`;
};

const brainGcdGame = game(getInfoMessage, getQuestion, getCorrectAnswer);

export default brainGcdGame;
