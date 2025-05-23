const arguments = process.argv;
const numArguments = arguments.length - 2; // Exclude node and script path

if (numArguments === 0) {
  console.log('No arguments');
} else if (numArguments === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}