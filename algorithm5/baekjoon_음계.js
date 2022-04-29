const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let count = 0;

for (let i = 0; i < 7; i++) {
  if (input[i] < input[i + 1]) {
    count++;
  }
}
if (count === 7) {
  console.log('ascending');
} else if (count === 0) {
  console.log('descending');
} else {
  console.log('mixed');
}
