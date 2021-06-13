import game, { getRandomInt } from '../index.js';

/** Генерация случайного оператора. */
const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

/** Получение корректного ответа на вопрос. */
const getAnswerByOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Неизвестный оператор: ${operator}`);
  }
};

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operator = getOperator();
  const correctAnswer = getAnswerByOperator(a, b, operator);

  return { question: `${a} ${operator} ${b}`, correctAnswer: `${correctAnswer}` };
};

const brainCalcGame = game('What is the result of the expression?', getGameData);

export default brainCalcGame;
