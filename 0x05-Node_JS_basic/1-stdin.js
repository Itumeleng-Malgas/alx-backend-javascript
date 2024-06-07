const readline = require('readline');

// Create an interface for reading input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  
  rl.close();
});

// Listen for the 'close' event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

