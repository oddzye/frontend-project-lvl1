import readlineSync from 'readline-sync';

/** Знакомство с пользователем. */
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

/** Получение вступительного сообщения игры. */
const getInfoMessage = (text) => console.log(text);

/** Базовый шаблон игры. */
const gameTemplate = (text, getGameData) => {
  const name = greeting();
  getInfoMessage(text);
  const MAX_COUNT_QUESTIONS = 3;
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

export default gameTemplate;
