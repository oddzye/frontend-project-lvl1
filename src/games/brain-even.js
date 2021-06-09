import game from '../index.js';

/** Проверка числа на чётность. */
const isEven = (num) => num % 2 === 0;

/** Генерация случайного числа от 1 до 100. */
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

/** Получение корректного ответа на вопрос. */
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

/** Получение вступительного сообщения игры. */
const getInfoMessage = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEvenGame = game(getInfoMessage, generateRandomNumber, getCorrectAnswer);

export default brainEvenGame;
