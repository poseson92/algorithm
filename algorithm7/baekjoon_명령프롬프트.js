const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
let answer = '';

for (let i = 0; i < input[0].length; i++) {
  let alpha = input[0][i];
  let result = true;
  for (let j = 0; j < input.length; j++) {
    if (alpha !== input[j][i]) {
      result = false;
      break;
    }
  }
  if (result) answer += alpha;
  else answer += '?';
}

console.log(answer);
