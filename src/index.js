import readlineSync from 'readline-sync';

const MAX_COUNT_QUESTIONS = 3;

/**
 * Базовый шаблон игры.
 * @param {string} gameIntroMessage Вступительное сообщение игры.
 * @param {Function} getGameData Получение вопроса и правильного ответа.
 */
const getGameTemplate = (gameIntroMessage, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameIntroMessage);

  for (let i = 0; i < MAX_COUNT_QUESTIONS; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

/** Возвращает случайное число от min до max. */
export const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export default getGameTemplate;
