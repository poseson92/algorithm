const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let count = Number(input);

for (let i = count; i > 0; i--) {
  console.log(''.repeat(count - i) + '*'.repeat(i));
}
