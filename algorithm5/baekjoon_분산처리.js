const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const result = input.map((v) => {
  const [v1, v2] = v.split(' ');

  let num = 1;

  for (let i = 0; i < v2; i++) {
    num = (num * v1) % 10;
  }
  return num === 0 ? 10 : num;
});

console.log(result.join('\n'));
