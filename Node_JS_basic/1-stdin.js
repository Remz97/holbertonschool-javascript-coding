const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readInterface.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  readInterface.close();
});

readInterface.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
