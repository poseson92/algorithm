const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const [A, B] = input;
let a = 1;
let b = 1;

for (let i = A - B + 1; i <= A; i++) {
  a *= i;
}

for (let i = 1; i <= B; i++) {
  b *= i;
}

console.log(a / b);
