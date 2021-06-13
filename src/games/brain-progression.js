import game, { getRandomInt } from '../index.js';

/** Возвращает объект, в котором находится вопрос для игры и ответ. */
const getGameData = () => {
  const startPos = 1;
  const lastPos = 10;
  const indexToHide = getRandomInt(startPos, lastPos);
  const step = getRandomInt(1, 100);
  let currentNumber = getRandomInt(1, 100);
  let progression = '';
  let correctAnswer;

  for (let i = startPos; i <= lastPos; i += 1) {
    if (i === indexToHide) {
      progression += '.. ';
      correctAnswer = String(currentNumber);
    } else {
      progression += `${currentNumber} `;
    }

    currentNumber += step;
  }

  return { question: progression, correctAnswer };
};

export default () => game('What number is missing in the progression?', getGameData);
