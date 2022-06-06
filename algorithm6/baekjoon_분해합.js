const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

for (let i = 1; i <= num; i++) {
  const value = String(i)
    .split('')
    .map((el) => +el)
    .reduce((acc, cur) => {
      return acc + cur;
    }, i);
  if (value === num) {
    console.log(i);
    break;
  }
  if (i === num) {
    console.log(0);
  }
}
