const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
