import readlineSync from 'readline-sync';

/** Знакомство с пользователем. */
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

/** Базовый шаблон игры. */
const gameTemplate = (getInfoMessage, getQuestion, getCorrectAnswer) => () => {
  const name = greeting();
  getInfoMessage();
  const MAX_COUNT_QUESTIONS = 3;
  for (let i = 0; i < MAX_COUNT_QUESTIONS; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

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

export default gameTemplate;
