const arguments = process.argv;
const input = arguments[2];

if (!input) {
  console.log('Not a number');
} else {
  const parsed = parseInt(input, 10);
  
  if (isNaN(parsed)) {
    console.log('Not a number');
  } else {
    console.log('My number:', parsed);
  }
}