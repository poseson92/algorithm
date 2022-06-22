const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const sorted = input.filter((el) => el % 2 !== 0);

if (sorted.length > 0) {
  const sum = sorted.reduce((acc, cur) => acc + cur);
  console.log(sum);
  console.log(Math.min(...sorted));
} else {
  console.log(-1);
}
