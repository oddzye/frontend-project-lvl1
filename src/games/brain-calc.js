import game from '../index.js';

/** Генерация случайного числа от 1 до 100. */
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

/** Генерация случайного оператора. */
const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

/** Генерация вопроса. */
const getQuestion = () => `${generateRandomNumber()} ${generateRandomOperator()} ${generateRandomNumber()}`;

/** Получение корректного ответа на вопрос. */
const getCorrectAnswer = (question) => {
  const [a, operator, b] = question.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      throw new Error('Неизвестный оператор');
  }

  return `${result}`;
};

/** Получение вступительного сообщения игры. */
const getInfoMessage = () => console.log('What is the result of the expression?');

const brainCalcGame = game(getInfoMessage, getQuestion, getCorrectAnswer);

export default brainCalcGame;
