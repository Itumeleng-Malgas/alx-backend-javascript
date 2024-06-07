process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Function to handle user input
const handleInput = (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
};

// Attach the 'data' event listener for user input
process.stdin.on('data', handleInput);

// Attach the 'exit' event listener to display the closing message
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
