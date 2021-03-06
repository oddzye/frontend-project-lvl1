import getGameTemplate from '../index.js';
import getRandomInt from '../generator.js';

/** Генерация случайного оператора. */
const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
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
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = `${getAnswerByOperator(a, b, operator)}`;

  return { question, correctAnswer };
};

export default () => getGameTemplate('What is the result of the expression?', getGameData);
