const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const [b, c] = input[2].split(' ').map(Number);
let answer = a.length;

for (let exam of a) {
  exam -= b;
  if (exam < 0) continue;
  answer += Math.ceil(exam / c);
}
console.log(answer);
