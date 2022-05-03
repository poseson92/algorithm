const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let star = '';

for (let i = 1; i <= input; i++) {
  star += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n';
}

console.log(star);
