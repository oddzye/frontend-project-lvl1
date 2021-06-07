import readlineSync from 'readline-sync';

/** Проверка числа на чётность. */
const isEven = (num) => num % 2 === 0;

/** Генерация случайного числа от 1 до 100. */
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

/** Знакомство с пользователем.
 * @returns {string} name Имя пользователя.
 */
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

/** Логика игры.
 * @param {string} username Имя пользователя.
 */
const play = (username) => {
  const MAX_COUNT_QUESTIONS = 3;
  for (let i = 0; i < MAX_COUNT_QUESTIONS; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

/** Инициализация игры. */
const gameInit = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  play(name);
};

export default gameInit;
