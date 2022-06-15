const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString() * 1;

let fibo = [0, 1];

for (let i = 1; i <= input; i++) {
  fibo.push(BigInt(fibo[i]) + BigInt(fibo[i - 1]));
}

console.log(fibo[input].toString());
