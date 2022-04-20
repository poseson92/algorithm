const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const num1 = BigInt(input.shift());
const num2 = BigInt(input.shift());

console.log((num1 / num2).toString());
console.log((num1 % num2).toString());
