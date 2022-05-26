const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split('').reverse().join('');
  console.log(input[i] === reverseStr ? 'yes' : 'no');
}
