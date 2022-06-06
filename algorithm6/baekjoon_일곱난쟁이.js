const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const Total = input.reduce((acc, cur) => {
  return acc + cur;
}, 0);

let answer = '';

for (let i = 0; i < 9; i++) {
  if (answer.length > 0) break;
  for (let j = i + 1; j < 9; j++) {
    if (Total - input[i] - input[j] == 100) {
      const num = input.filter((_, k) => k != i && k != j).sort((a, b) => a - b);
      answer = num.join('\n');
      console.log(answer);
      break;
    }
  }
}
