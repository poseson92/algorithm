const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const num = input.map((el) => Number(el));

console.log(num.sort((a, b) => a - b)[1]);
