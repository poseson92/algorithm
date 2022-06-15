const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] < 40) {
    result += 40;
  } else {
    result += input[i];
  }
}
console.log(result / 5);
