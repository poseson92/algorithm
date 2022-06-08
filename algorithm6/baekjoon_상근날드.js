const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const num1 = input
  .slice(0, 3)
  .sort((a, b) => b - a)
  .pop();
const num2 = input
  .slice(3, 5)
  .sort((a, b) => b - a)
  .pop();

console.log(num1 + num2 - 50);
